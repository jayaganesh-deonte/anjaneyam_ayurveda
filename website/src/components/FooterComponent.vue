<template>
  <v-container class="footer text-center mx-0" fluid>
    <v-img
      src="@/assets/logo.png"
      contain
      max-height="100px"
      class="float:left"
    >
    </v-img>
    <div class="ma-4 anjaneyamHeading" style="color: #d3f04a">
      Sri Anjaneyam Ayurveda Vaidyasala
    </div>
    <div class="white--text text-center">
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <div>
                <div class="text-h5 ma-2 text-decoration-underline">
                  In Patients:
                </div>
                <div>
                  Sri Anjaneyam Ayurveda Vaidyasala, <br />
                  478/2, Govindakudi - Papanasam Road, Inaamkiliyur Village,
                  <br />
                  Valangaiman, Thiruvarur, Tamilnadu 614207
                </div>

                <div class="text-p ma-2">
                  <v-row justify="center" align="center">
                    <v-col>
                      <v-icon color="white" size="medium"> mdi-phone </v-icon>
                      <a
                        href="tel:+918273123457"
                        class="white--text text-decoration-none"
                      >
                        +918273123457
                      </a>
                    </v-col>
                    <v-col>
                      <v-icon color="white" size="medium">
                        mdi-whatsapp
                      </v-icon>
                      <a
                        href="https://wa.me/918273123457"
                        target="_blank"
                        class="white--text text-decoration-none"
                      >
                        +918273123457
                      </a>
                    </v-col>
                    <v-col>
                      <v-icon color="white" size="medium">fa-envelope </v-icon>
                      <a
                        href="mailto:srianjaneyamayurveda@gmail.com"
                        target="_blank"
                        class="white--text text-decoration-none"
                      >
                        srianjaneyamayurveda@gmail.com
                      </a>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>
                <div class="text-h5 ma-2 text-decoration-underline">
                  Out Patients:
                </div>
                <div>
                  Sri Anjaneyam Ayurveda Vaidyasala,<br />
                  10, Dabir Middle Street, Near Mutt Street<br />
                  Kumbakonam, Tamilnadu 612001
                </div>

                <div class="text-p white--text ma-2">
                  <v-row justify="center" align="center">
                    <v-col>
                      <v-icon color="white" size="medium"> mdi-phone </v-icon>
                      <a
                        href="tel:+919994857336"
                        class="white--text text-decoration-none"
                      >
                        +919994857336
                      </a>
                    </v-col>
                    <v-col>
                      <v-icon color="white" size="medium">
                        mdi-whatsapp
                      </v-icon>
                      <a
                        href="https://wa.me/919994857336"
                        target="_blank"
                        class="white--text text-decoration-none"
                      >
                        +919994857336
                      </a>
                    </v-col>
                    <v-col>
                      <v-icon color="white" size="medium">fa-envelope </v-icon>
                      <a
                        href="mailto:srianjaneyamayurveda@gmail.com"
                        target="_blank"
                        class="white--text text-decoration-none"
                      >
                        srianjaneyamayurveda@gmail.com
                      </a>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7672062229885!2d79.3200079748071!3d10.917431789240023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd612f63f18f%3A0x5f48c7091f9c6473!2sSRI%20ANJANEYAM%20AYURVEDA%20VAIDYASALA!5e1!3m2!1sen!2sin!4v1732846982320!5m2!1sen!2sin"
            style="border: 0"
            :height="isDesktop ? '100%' : ''"
            :width="isDesktop ? '100%' : ''"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4"> </v-col>
        <v-col cols="12" sm="4">
          <div>
            Designed and Developed by
            <a
              href="https://www.deonte.in"
              target="_blank"
              class="secondary--text"
              >www.deonte.in</a
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    isDesktop: false,
  }),
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isDesktop = window.innerWidth > 960;
    },
  },
};
</script>

<style>
.footer {
  /*background-color: #0d4b2c;*/
  background-color: #008000;
}
</style>
