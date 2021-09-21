<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: gray;
}

.container {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.app {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
}

.btn {
  padding: 8px 16px;
  background: teal;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}
.btn:hover,
.btn:active {
  background: rgb(0, 102, 102);
  cursor: pointer;
}
.btn.text {
  padding: 8px 16px;
  background: none;
  color: teal;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}
.btn.text:hover,
.btn.text:active {
  background: none;
  cursor: pointer;
}
.btn.close {
  background: tomato;
}
.btn[disabled] {
  background: rgb(138, 167, 167);
  cursor: auto;
}
.form-control {
  margin: 16px 0;
}
.form-control label {
  display: block;
  font-size: 0.9rem;
}
.form-control input {
  width: 100%;
  padding: 8px;
}
</style>
