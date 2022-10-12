"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log("Elindult");
    document.getElementById('username').addEventListener('input', (e) => {
        let elem = e.currentTarget;
        document.body.style.backgroundColor = elem.value;
        console.log(elem.value);
        elem.pattern.includes('[a-zA-Z\-0-9]');
    });
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
});
