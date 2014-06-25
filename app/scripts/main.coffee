options = 
	subtree : true
	childList : true
	attributes : false

$ = document.querySelector.bind document
text = $ '#text'
undo = $ '#undo'
redo = $ '#redo'
editor = $ '#editor'
dirty = $ '#dirty'
startValue = text.innerHTML
newValue = ''

stack = new Undo.Stack()
blocked = false;

observer = new MutationObserver (mutations)->
  if blocked
    blocked = false
    return
  
  newValue = text.innerHTML
  stack.execute new EditCommand text,startValue,newValue
  startValue = newValue

observer.observe text,{
  attributes:true
  childList : true
  characterData : true
  characterDataOldValue : true
  subtree:true
}

EditCommand = Undo.Command.extend {
  constructor : (textarea,oldValue,newValue)->
    @textarea = textarea
    @oldValue = oldValue
    @newValue = newValue
  
  execute : ->

  undo : ->
    blocked = true
    @textarea.innerHTML = @oldValue

  redo : ->
    blocked = true
    @textarea.innerHTML = @newValue
}


stackUI = ->
  redo.disabled = !stack.canRedo()
  undo.disabled = !stack.canUndo()
  dirty.style.display = if stack.dirty() then 'inline-block' else 'none'

stack.changed = ->
  stackUI()

redo.addEventListener 'click',->
  stack.redo()

save.addEventListener 'click' ,->
  stack.save()

undo.addEventListener 'click',->
  stack.undo()

stackUI()