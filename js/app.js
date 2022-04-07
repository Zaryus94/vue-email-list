// console check
console.log("JS OK!")

new Vue({
    el "#app",
    data() {
        return {
            emailArray: [],
            nLoop: 10,
        }
    }
    mounted() {
        for (let i = 0; i < this.nLoop; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => (this.emailArray.push(response.data.response)))
        }
    }
})