<template>
	<div class="page-container text-white">
		<Hero
			title="Contact Us"
			subtitle="Are we missing your favourite Movie or TV series?<br/>Or simply have some feedback? We'd be happy to hear from you!"
			class="pt-12"
		></Hero>
		<div class="mt-16 px-4">
			<div v-if="submitted" class="max-w-sm mx-auto mb-5">
				<p class="text-center text-white">
					Thank you! We will get back to you as soon as possible.
				</p>
			</div>
			<form v-else class="max-w-sm mx-auto" @submit.prevent="submitForm">
				<div class="mb-5">
					<label for="name" class="block mb-2 text-sm font-medium text-white">
						<span class="text-pink-500">*</span>
						Your Name
					</label>
					<span class="text-pink-500">{{ nameError }}</span>
					<input
						type="text"
						id="name"
						class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
						placeholder="Lew Knight"
						v-model="name"
						@blur="nameBlur"
					/>
				</div>

				<div class="mb-5">
					<label for="email" class="block mb-2 text-sm font-medium text-white">
						<span class="text-pink-500">*</span>
						Your email
					</label>
					<span class="text-pink-500">{{ emailError }}</span>
					<input
						type="email"
						id="email"
						class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
						placeholder="hello@streamvault.com"
						v-model="email"
						@blur="emailBlur"
					/>
				</div>

				<div class="mb-5">
					<label
						for="message"
						class="block mb-2 text-sm font-medium text-white"
					>
						Your message
					</label>
					<span class="text-pink-500">{{ messageError }}</span>
					<textarea
						id="message"
						rows="4"
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Leave a comment..."
						v-model="message"
						@blur="messageBlur"
					></textarea>
				</div>

				<div class="mb-4">
					<div class="flex items-center">
						<input
							id="checkbox-1"
							type="checkbox"
							v-model="agree"
							@blur="agreeBlur"
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label for="checkbox-1" class="ms-2 text-sm font-medium text-white">
							<span class="text-pink-500">*</span>
							I agree to the
							<a href="#" class="text-pink-500 hover:underline">
								terms and conditions
							</a>
							.
						</label>
					</div>
					<span class="text-pink-500 mt-2">{{ agreeError }}</span>
				</div>

				<button
					type="submit"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useForm, useField } from 'vee-validate';
	import * as yup from 'yup';

	// Define the validation schema
	const validationSchema = yup.object({
		name: yup.string().required('Name is required'),
		email: yup
			.string()
			.email('Must be a valid email')
			.required('Email is required'),
		message: yup.string(),
		agree: yup
			.boolean()
			.oneOf([true], 'You must accept the terms and conditions')
			.required('You must accept the terms and conditions'),
	});

	// Initialize the form with the schema
	const { handleSubmit } = useForm({
		validationSchema,
	});

	// Define individual fields
	const {
		value: name,
		errorMessage: nameError,
		handleBlur: nameBlur,
	} = useField('name');
	const {
		value: email,
		errorMessage: emailError,
		handleBlur: emailBlur,
	} = useField('email');
	const {
		value: message,
		errorMessage: messageError,
		handleBlur: messageBlur,
	} = useField('message');
	const {
		value: agree,
		errorMessage: agreeError,
		handleBlur: agreeBlur,
	} = useField('agree');

	// Submission handler
	const submitted = ref(false);
	const onSubmit = (values: any) => {
		console.log('Form submitted:', values);
		submitted.value = true;
	};

	const submitForm = handleSubmit(onSubmit);
</script>

<style scoped></style>
