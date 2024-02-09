<template>
  <footer
    class="z-20 bg-cota-background shadow-lg backdrop-blur-md backdrop-filter"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-12 pb-8 pt-8 sm:pt-24 lg:px-16 lg:pt-16">
      <div class="grid grid-cols-5 px-2">
        <div
          class="col-span-5 flex justify-between gap-x-8 sm:gap-20 md:col-span-3"
        >
          <div class="shrink-0">
            <h3 class="text-sm font-semibold leading-6 text-white">
              Get Involved
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.solutions" :key="item.name">
                <NuxtLink
                  :href="item.href"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="">
            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.legal" :key="item.name">
                <NuxtLink
                  :href="item.href"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="">
            <h3 class="text-sm font-semibold leading-6 text-white">About</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.company" :key="item.name">
                <NuxtLink
                  :href="item.href"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-span-5 mt-12 grid-cols-1 justify-between md:col-span-2 md:mt-0"
        >
          <div>
            <div id="newsletter">
              <h3 class="text-sm font-semibold leading-6 text-white">
                Subscribe to our newsletter
              </h3>
              <p class="mt-2 text-sm leading-6 text-gray-300">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form
                class="mt-6 sm:flex sm:max-w-md"
                @submit.prevent="handleSubmit"
              >
                <input
                  v-model="formData.email"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autocomplete="email"
                  required
                  :disabled="submittingEmail"
                  class="h-fit w-full min-w-0 appearance-none rounded-md border-0 bg-cota-secondary px-3 py-1.5 text-base text-cota-on-secondary shadow-sm transition-shadow duration-300 placeholder:text-cota-primary focus:shadow-lg focus:shadow-cota-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Enter your email"
                  @blur="removeHash"
                />
                <div class="mt-4 w-fit sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    :disabled="submittingEmail"
                    class="hover:bg-primary-[100] flex w-full items-center justify-start rounded-md bg-cota-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cota-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div class="mt-6 flex space-x-6 md:order-2">
              <NuxtLink
                v-for="item in navigation.social"
                :key="item.name"
                :href="item.href"
                class="text-cota-primary hover:text-gray-400"
              >
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-8 border-cota-primary" />
      <div class="flex justify-between px-2 pt-8 sm:mt-20 md:mt-16">
        <p class="mr-2 text-xs leading-5 text-gray-400">
          &copy; 2023 alphalist GmbH. All rights reserved.
        </p>
        <div class="flex h-5 space-x-6">
          <NuxtImg class="object-contain" src="/alphalist_logo_white.png" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, defineComponent, h } from "vue";

type SubscriptionResult = {
  success: boolean;
  message: string;
};
const formData = reactive({
  email: "",
});
const submittingEmail = ref(false);
const emit = defineEmits(["submissionResult"]);

const newsletterInput = ref<HTMLElement | null>(null);

const focusNewsletterInput = () => {
  if (window.location.hash === "#newsletter" && newsletterInput.value) {
    (newsletterInput.value as HTMLInputElement).focus();
  }
};

onMounted(() => {
  focusNewsletterInput();
  window.addEventListener("hashchange", focusNewsletterInput);
});

onUnmounted(() => {
  window.removeEventListener("hashchange", focusNewsletterInput);
});

const removeHash = () => {
  if (window.location.hash === "#newsletter") {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }
};

const handleSubmit = async () => {
  submittingEmail.value = true;
  await $fetch("/api/newsletter/subscribe", {
    method: "post",
    body: JSON.stringify(formData),
  })
    .then((res) => {
      console.log("succuess", res);
      emit("submissionResult", {
        success: true,
        message: "Subscription successful!",
      });
      formData.email = "";
    })
    .catch((reason) => {
      console.error("Error during subscription:", reason);
      emit("submissionResult", {
        success: false,
        message: "Subscription failed. Please try again.",
      });
    });
  submittingEmail.value = false;
};

const navigation = {
  solutions: [
    { name: "as a Partner", href: "/partners" },
    { name: "as a Speaker", href: "/speakers" },
  ],
  company: [
    { name: "code.talks", href: "/about-us" },
    { name: "alphalist", href: "https://alphalist.com/" },
  ],
  legal: [
    { name: "Imprint", href: "/imprint" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/tc" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/developer.conference.hamburg/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/code.talks/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/codetalkshh",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },

    {
      name: "YouTube",
      href: "https://www.youtube.com/@code.talksbyalphalist",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>
