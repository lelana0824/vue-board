import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const hi = jest.fn().getMockName();
  console.log(hi)
})
