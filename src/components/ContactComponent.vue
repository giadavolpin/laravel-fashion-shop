<template>
    <section class="contact_me py-5" id="form">
        <div class="inner-wrapper">
            <div class="container-fluid ">
                <h2 class="text-uppercase text-center clienti">servizio clienti</h2>
                <p class="py-2">Hai una domanda o un dubbio?
                    Compila semplicemente il modulo sottostante e fai clic su Invia. Risponderemo a tutte le richieste il prima
                    possibile.
                </p>
                <div v-if="success" class="alert alert-success text-start" role="alert">
                    Messaggio inviato con successo!
                </div>
                <div class="row">
                    <form class="col-12 text-start" @submit.prevent="sendForm()">
                        <div class="input">
                            <input class="" type="text" name="name" id="name"
                                placeholder="NOME" v-model="name" :class="{ 'is-invalid': errors.name }" required>
                            <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>

                        <div class="input">
                            <input class="" type="text" name="email" id="email"
                                placeholder="E-MAIL" v-model="email" :class="{ 'is-invalid': errors.email }" required>
                            <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">
                                {{ error }}
                            </p>

                        </div>

                        <div class="input">
                            <textarea class="" name="message" id="message" cols="30"
                                rows="5" placeholder="IL TUO MESSAGGIO" v-model="message"
                                :class="{ 'is-invalid': errors.message }" required></textarea>
                            <p v-for="(error, index) in errors.message" :key="index" class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>

                        <button class="button button-pink" type="submit" :disabled="loading">
                            {{loading?'Inviando...': 'Invia'}}
                        </button>
                    </form>
                    <p class="pt-2">Puoi anche contattarci al nostro numero clienti: 039 95 30 555</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ContactComponent',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false,
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                } else {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#form {
    max-width: 100%;

    .input {
        max-width: 100%;

        input,
        textarea {
            border-radius: 10px;
            width: 100%;
            padding: 10px 12px;
            font-size: 14px;
            line-height: 16px;
            border: 2px solid #fec7d7;
        }

        textarea {
            resize: none;
            height: 150px;
        }
    }
    .input:not(:last-child) {
        margin-bottom: 10px;
    }
    
}
.clienti{
    font-family: 'Itim', cursive;
}
</style>