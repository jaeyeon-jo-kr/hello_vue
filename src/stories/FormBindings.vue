<script setup>
import {ref} from 'vue'

const text = ref('Edit me')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>

<template>
    <h2>Text Input</h2>
    <input v-model="text">{{ text }}

    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Checked: {{ checked }}</label>

    <h2>Multi Checkbox</h2>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <p>Checked names :<pre>{{checkedNames}}</pre>
    </p>

    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked {{ picked }}</span>
    <h2>Select</h2>
    <select v-model="selected">
        <option disabled value="">please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
</template>