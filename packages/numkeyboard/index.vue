<template>
  <div class="funt-numkeypad">
    <div class="funt-list-input">
      <div class="funt-input-line">
        <div class="funt-input-label funt-input-label-5">{{options.label}}</div>
        <div class="funt-input-control" :class="outsideclass">
          <div class="fake-input-container" :class=" 'fake-input-container-' + options.textalign">
            <div class="fake-input-placeholder">{{placeholder}}</div>
            <div role="textbox" aria-label="money format" class="fake-input" :class="{focus: options.flag}">{{options.value}}</div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import basic from '../utils/create-basic';
export default basic({
  name: 'numkeyboard',
  props: {
    options: {
      type: Object,
      default: {
        type: '',
        value: {
          type: String,
          default: ''
        },
        label: '',
        placeholder: '',
        textalign: '',
        flag: false
      }
    }
  },
  data() {
    return {
      outsideclass: 'funt-keyboard-exactAreaClassName'
    };
  },
  computed: {
    placeholder() {
      return this.options.value.length > 0 ? '' : this.options.placeholder;
    }
  }
});
</script>
