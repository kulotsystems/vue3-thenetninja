<template>
    <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label for="role">Role:</label>
        <select id="role" v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label for="skills">Skills</label>
        <input type="text" id="skills" v-model="tempSkill" @keyup.alt="addSkill">
        <div><label style="margin-top: 1px; margin-bottom: 0;">(ALT + comma to add)</label></div>
        <div v-for="skill in skills" :key="skill" class="pill" @click="removeSkill(skill)">
            {{ skill }}
        </div>

        <div class="terms">
            <label style="cursor: pointer">
                <input type="checkbox" v-model="terms" required>
                Accept Terms and Conditions
            </label>
        </div>

        <div class="submit">
            <button type="submit">Create an Account</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'SignupForm',
        data() {
            return {
                email    : '',
                password : '',
                role     : 'developer',
                terms    : false,
                tempSkill: '',
                skills   : [],
                passwordError: ''
            }
        },
        methods: {
            addSkill(e) {
                let tempSkill = this.tempSkill.trim();
                if(e.key === ',' && tempSkill !== '') {
                    if(!this.skills.includes(tempSkill))
                        this.skills.push(tempSkill);
                    this.tempSkill = '';
                }
            },

            removeSkill(skill) {
                this.skills = this.skills.filter(s => s !== skill);
            },

            handleSubmit() {
                // validate password
                this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters.'
                if(!this.passwordError) {
                    console.log('Email   : ', this.email);
                    console.log('Password: ', this.password);
                    console.log('Role    : ', this.role);
                    console.log('Skills  : ', this.skills);
                    console.log('Terms Accepted: ', this.terms);
                }
            }
        }
    }
</script>

<style scoped>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    input[type='checkbox'] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }

    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }

    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }

    .submit {
        text-align: center;
    }

    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>
