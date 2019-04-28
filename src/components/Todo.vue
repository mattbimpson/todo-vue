<template>
    <div>#{{todo.id}} {{todo.text}}</div>
</template>
<script>
export default {
    name: 'Todo',
    props: ['todo']
}
</script>
