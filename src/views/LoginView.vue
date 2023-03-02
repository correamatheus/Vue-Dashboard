<template>
  <form
    class="container-fluid d-flex align-items-center justify-content-center"
    @submit.prevent="login"
    style="background: #e5e5e5; height: 100vh"
  >
    <div class="login">
      <div class="form-group login_email">
        <label class="col-sm-2 control-label" for="email">EMAIL</label>
        <input
          required
          type="email"
          v-model="login_form.email"
          class="form-control"
          placeholder="Email Address"
        />
      </div>

      <div class="form-group login_password">
        <label class="col-sm-2 control-label" for="password">PASSWORD</label>
        <input
          required
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="login_form.password"
        />
      </div>

      <input type="submit" class="btn btn-primary w-100" value="Log in" />
    </div>
  </form>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();  

    const login = () => {
      store.dispatch("login", login_form.value);
      console.log('teste')
    }

    return {
      login_form,
      register_form,
      login
    };
  },
};
</script>

<style scoped>
.login {
  width: 23rem;
  background: #ffffff;
  border-radius: 8px;
  padding: 42px 32px;
  height: 60%;
}

.login_password > label,
.login_email > label {
  font-weight: bold;
  font-size: 12px;
  color: #9fa2b4;
  margin-bottom: 6px;
}

.login_password > input::placeholder,
.login_email > input::placeholder {
  font-size: 14px;
  color: #4b506d;
  opacity: 0.4;
  padding: 11px 8px;
}
.login_password > input,
.login_email > input {
  border: 1px solid #f0f1f7;
  border-radius: 8px;
  margin-bottom: 24px;
}

.btn {
  padding: 15px 24px;
  background: #3751ff;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
}
</style>