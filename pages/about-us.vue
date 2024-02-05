<template>
  <div class="bg-cota-background">
    <HeroSection>
      <template v-slot:background>
        <HeroBgImage image-url="/about_us_page/hero.jpeg"></HeroBgImage>
      </template>
      <HeroHeadline> ABOUT US </HeroHeadline>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink
          @click="dialogOpen = true"
          class="rounded-md px-3.5 py-2 text-sm font-semibold text-cota-on-primary bg-cota-primary"
          >Watch Recap</NuxtLink
        >
      </div>
    </HeroSection>
    <div class="px-12">
      <div class="mx-auto mt-20 max-w-6xl text-center">
        <SectionHeader
          >OUR <SectionHeaderHighlightText text="STORY"
        /></SectionHeader>
        <NormalTextBlock class="mx-auto">
          Two young entrepreneurs had the idea in 2011 with the "Developer
          Conference" to bring more developers together in a relaxed and
          familial atmosphere to form a community, to expand the horizon
          together, and at the same time to push the location Hamburg in the
          digital industry. Within two years, today's code.talks conference has
          grown into an exchange platform for over 1,500 tech enthusiasts who
          share our passion. Every year, we offer an updated program with a
          diverse selection of lectures and panel discussions on the topics and
          trends that currently move our developer industry. To further develop
          this vision in the coming years, ABOUT YOU and thus code.talks have
          decided to hand over the developer conference to alphalist GmbH in
          2023. Together we have the mission to create a large collaborative
          developer community to promote the exchange within the IT industry
          even more. So what are you waiting for, share our vision and become
          part of a large code.talks community. Together we want to experience
          exciting lectures, exchange ideas, code with others, and last but not
          least, we of course want to celebrate a great time with you at the
          After Conference Party.
        </NormalTextBlock>
      </div>
      <div class="mt-12">
        <GallerySection :image-infos="pictures" />
      </div>
      <div class="text-center">
        <SectionHeader
          >OUR <SectionHeaderHighlightText text="TEAM"
        /></SectionHeader>
        <SubSectionHeader class="mt-6">This is our team.</SubSectionHeader>
        <PersonTileList :person-array="team"></PersonTileList>
      </div>
      <div class="text-center mt-28">
        <SectionHeader
          >OUR <SectionHeaderHighlightText text="Principles"
        /></SectionHeader>
        <SubSectionHeader class="mt-6"
          >This year we like to say thank you to our beloved partners in
          code.</SubSectionHeader
        >
        <ul class="flex flex-wrap gap-12 mt-12 mx-auto justify-center">
          <li
            class="rounded-xl w-96 p-8 border border-cota-primary"
            v-for="principle in principles"
            :key="principle.title"
          >
            <div class="h-32">
              <img class="h-16 object-contain mx-auto" :src="principle.icon" />
              <h3 class="mt-4 text-3xl text-cota-primary font-thin">
                {{ principle.title }}
              </h3>
            </div>
            <NormalTextBlock class="mt-4 text-center">
              {{ principle.description }}
            </NormalTextBlock>
          </li>
        </ul>
      </div>
      <div class="text-center mt-20 pb-10">
        <SectionHeader
          >CODE OF <SectionHeaderHighlightText text="CODUCT"
        /></SectionHeader>
        <NormalTextBlock class="mx-auto">
          Everyone is welcome at code.talks and should be able to experience two
          comfortable conference days. We have established some rules of conduct
          to warrant exchange of information in a relaxed atmosphere.
          <br /><br />
          Nobody should be discriminated against or harassed at code.talks!
          “Harassment” includes, among other things, offensive statements based
          on gender, sexual orientation, disability, appearance, physique,
          ethnicity, or religious affiliation (or lack thereof), sexualized
          language and depictions in public places, deliberate intimidation,
          stalking, prosecution, undesired photographing or recording, repeated
          disruption of lectures and other events, undesired physical contact,
          and undesired sexual attention. This includes the venue, the lectures,
          the workshops, the after conference party, and various social media
          channels. <br /><br />All visitors, no matter if they are
          participants, speakers, curators, partners, or organizers, are asked
          to comply with these rules. When they purchase their ticket, book a
          partnership, or agree to hold a talk, visitors confirm that they will
          comply with our expectations to their conduct at code.talks. Anyone
          found in violation of these rules will be subject to sanctions imposed
          by the event staff, up to ban from the conference without any
          entitlement to a refund of the admission fee. <br /><br />Please
          contact a member of the organizer team immediately if you feel
          harassed or notice that someone else is being harassed, or if there
          are any other problems. You can recognize us easily by our code.talks
          crew t-shirts. All helpers will be ready to listen to you and do what
          they can to solve the issue. Of course, you may also contact us by
          email at any time:
          <NuxtLink class="text-cota-primary" href="mailto:info@codetalks.com">
            info@codetalks.com</NuxtLink
          >
        </NormalTextBlock>
      </div>
    </div>
    <Dialog
      @close="dialogClosed"
      :open="dialogOpen"
      class="fixed inset-0 flex items-center justify-center z-20"
    >
      <div
        class="fixed inset-0 bg-black bg-opacity-50"
        @click="dialogOpen = false"
      ></div>
      <DialogPanel
        class="relative mx-auto p-1 rounded-lg text-sm font-semibold text-cota-green shadow-lg backdrop-filter backdrop-blur-md border-2 border-cota-primary bg-cota-background z-30"
      >
        <iframe
          v-if="dialogOpen"
          class="rounded-lg"
          :width="iframeWidth"
          :height="iframeHeight"
          id="youtubeVideo"
          :src="recapVideo"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import type { Person } from "~/utils/types/person";

const team: Array<Person> = [
  {
    name: "Tobi",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
  },
  {
    name: "Joni",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
  },
  {
    name: "Regina",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
  },
  {
    name: "Valentina",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
  },
  {
    name: "Chaya",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Ivan_Notaroš-7dae29ae2a9e396ddc8a8038bab1c8d1.png",
  },
  {
    name: "Marten",
    image:
      "https://codetalks.de/storage/images/persons/thumbnails/Philipp_Gentz-6f8dd39ab6ed605242bada98754410ad.jpg",
  },

];

const pictures = [
  {
    url: "/gallery/cota-1.png",
    focusPoint: "50% 30%",
    description: "Image 1 Description",
  },
  {
    url: "/gallery/cota-2.png",
    focusPoint: "80% 20%",
    description: "Image 2 Description",
  },
  { url: "/gallery/cota-3.png", focusPoint: "20% 80%" },
  { url: "/gallery/cota-4.png", focusPoint: "50% 30%" },
  { url: "/gallery/cota-5.png", focusPoint: "50% 45%" },
];

type Principle = {
  icon: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    icon: "https://codetalks.de/img/icons/codetalks-main/mission.svg",
    title: "MISSION",
    description:
      "We want to broaden our horizon together and move beyond our regular programming cosmos. Anyone can find just what they were looking for at code.talks. The conference is built on diverse and captivating subjects connected to web development. We support pioneers and visionaries who want to share their ideas to inspire other people. We want to use our passion for coding to bring IT enthusiasts together in a relaxed atmosphere where they can spend two memorable days filled with inspiration, extraordinary presentations, and, of course, fun.",
  },
  {
    icon: "https://codetalks.de/img/icons/codetalks-main/welcome.svg",
    title: "WELCOME AS YOU ARE",
    description:
      "Anyone is welcome at code.talks just as they are. Respectful cooperation is a matter of course for us. It is the basis on which all participants can share their ideas in a relaxed atmosphere. We welcome national and international speakers and promote cultural exchange. The digital world itself has no limits. No one should be discriminated against or harassed at code.talks due to their origin, religion, gender, sexual orientation, or appearance. Learn more about this in our code of conduct.",
  },
  {
    icon: "https://codetalks.de/img/icons/codetalks-main/corporation.svg",
    title: "YOUTH DEVELOPMENT",
    description:
      "We can make great progress by sharing our knowledge. Therefore we offer tickets with a large discount for students, pupils, and trainees. Due to our cooperation with universities, professors have the possibility to grant free tickets to students with a focus on IT, who would be unable to participate in spite of that discount. Since ticket prices are far below cost price, the tickets are co-financed by partners.",
  },
  {
    icon: "https://codetalks.de/img/icons/codetalks-main/community.svg",
    title: "COMMUNITY",
    description:
      "This is for the community. code.talks is known for its relaxed atmosphere, which is an essential element for us. We are proud to run a conference that is covering its expenses by income and expenditure. From the very beginning, we have been focusing on the community and the passion of developers rather than profit-oriented goals.",
  },
  {
    icon: "https://codetalks.de/img/icons/codetalks-main/non-profit.svg",
    title: "NON-PROFIT SUPPORT",
    description:
      "Financial support of non-profit initiatives is important to us. Our principles are dear to us, leading us to support organizations and events that share them. Depending on the funds available to us, we make donations to other non-profit initiatives and associations that promote young talent and diversity in the IT sector.",
  },
  {
    icon: "https://codetalks.de/img/icons/codetalks-main/greener.svg",
    title: "GO GREENER",
    description:
      "We are aware that sustainability is an important process in the organization of events. We believe that every step in the right direction of ecological responsibility makes a difference. So we try to keep waste production as low as possible and we strive for sustainable use of print media. Our tickets are always digital, and our schedule can be downloaded into your private calendar. We work together with regional caterers and their products, too.",
  },
];

const dialogOpen = ref(false);
const recapVideo = ref(
  "https://www.youtube.com/embed/Kx5N5QK3rOE?enablejsapi=1&autoplay=1&mute=1"
);

const iframeWidth = computed(() => {
  return Math.min(window.innerWidth * 0.9, 560);
});

const iframeHeight = computed(() => {
  return (iframeWidth.value * 9) / 16;
});

const dialogClosed = () => {
  console.log("closing");
};

watch(dialogOpen, (newVal) => {
  const iframe = document.getElementById("youtubeVideo") as HTMLIFrameElement;
  if (iframe) {
    const message = newVal ? "playVideo" : "pauseVideo";
    iframe.contentWindow?.postMessage(
      `{"event":"command","func":"${message}","args":""}`,
      "*"
    );
  }
});
</script>

<style scoped></style>
