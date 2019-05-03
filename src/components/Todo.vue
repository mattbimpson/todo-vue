<template>
    <div :class="{'todo-container': !completed, 'todo-container completed': completed}">
        <div class='todo-item'>
            {{todo.text}}
        </div>
        <div class='todo-controls'>
            done <input type="checkbox" @change="toggleCompleted" :model="completed" />
            <input type="button" className="btn" value="remove" @click="remove" />
        </div>
    </div>
</template>
<script src="./Todo.js" />
<style scoped src="./Todo.css" />
