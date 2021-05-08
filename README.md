# todo-vue

## a simple vuejs app with Vuex state management & TailwindCSS.

### TailwindCSS - 'utility first' css.
After installing the tailwind npm packages and adding the import to main.js, you can use all the built-in Tailwind css classes.


For example,


The todo items (see Todo.vue) have a class of "flex mb-5 w-80 p-3 rounded justify-between text-black items-baseline".


This translates to the following;


- flex            -    display: flex
- mb-5            -    margin-bottom: 5px
- w-80            -    width: 20rem
- p-3             -    padding: 3px
- rounded         -    border-radius: 0.25rem
- text-black      -    color: black
- items-baseline  -    align-items: baseline


You can also extract out the Tailwind CSS classes from your marup into their own class, as you would normally, using the @apply keyword; (See ConfirmBtn.vue)

<input type="button" class="btn"

...

.btn {
  @apply p-1 rounded text-black;
}