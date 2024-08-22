<template>
  <div>
    <div  :class="{ 'form-group--error': $v.name.$error }">
      <label >Name</label>
      <input  v-model.trim="$v.name.$model"/>
    </div>
    <div  v-if="!$v.name.required">Field is required</div>
    <div  v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <div  :class="{ 'form-group--error': $v.age.$error }">
      <label >Age</label>
      <input  v-model.trim.lazy="$v.age.$model"/>
    </div>
    <div  v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
    <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>
  import { required, minLength, between } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        name: '',
        age: 0
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        between: between(20, 30)
      }
    }
  }
</script>



















<!-- <template>
  <div>
    <input v-model="name" @blur="v$.name.$touch">
    <div v-if="v$.name.$error">Name field has an error.</div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      name: ''
    }
  },
  validations () {
    return {
      name: { required }
    }
  },
  methods:{
    submit(){
      console.log(this.name);
      alert("hello");
    }
  }
}
</script> -->