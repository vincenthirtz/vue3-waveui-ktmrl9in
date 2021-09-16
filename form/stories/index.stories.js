import defaultConfig from '~/story-helpers';
import Form from '~/form';

export default {
  ...defaultConfig,
  parameters: { ...defaultConfig.parameters, layout: 'fullscreen' },
};

export const Default = () => ({
  components: { Form },
  template: `
    <w-card class="white--bg" content-class="pa0">
      <div class="message-box">
        <w-transition-fade>
          <w-alert
            class="my0 text-light"
            v-if="form.submitted"
            success
            no-border>
            The form is valid, ready to send it!
          </w-alert>

          <w-alert
            class="my0 text-light"
            v-else-if="form.valid === false"
            error
            no-border>
            The form has {{ form.errorsCount }} errors.
          </w-alert>
        </w-transition-fade>
      </div>

      <Form
        class="px8 pt2 pb12"
        v-model="form.valid"
        v-model:errors-count="form.errorsCount"
        @validate="onValidate"
        @success="onSuccess">

        <w-input
          required
          label="First name"
          :validators="[validators.required]">
        </w-input>

        <w-input
          class="mt3"
          required
          label="Last name"
          :validators="[validators.required]">
        </w-input>

        <w-input
          class="mt3"
          disabled
          required
          label="User name"
          :validators="[validators.required]">
        </w-input>

        <w-flex class="mt4" wrap align-center justify-end>
          <w-checkbox
            required
            :validators="[validators.consent]">
            I agree to the terms & conditions
          </w-checkbox>

          <div class="spacer" />

          <w-button
            class="my1 mr2"
            bg-color="warning"
            type="reset"
            @click="form.submitted = form.sent = false">
            Reset
          </w-button>

          <w-button
            class="my1"
            type="submit"
            :disabled="form.valid === false"
            :loading="form.submitted && !form.sent">
            Validate
          </w-button>
        </w-flex>
      </Form>

      <w-notification
        v-model="form.sent"
        success
        transition="bounce"
        absolute
        plain
        round
        bottom>
        The form was sent successfully!
      </w-notification>
    </w-card>
  `,

  data: () => ({
    form: {
      valid: null,
      submitted: false,
      sent: false,
      errorsCount: 0,
    },
    validators: {
      required: (value) => !!value || 'This field is required',
      consent: (value) => !!value || 'You must agree',
    },
  }),

  methods: {
    onSuccess() {
      setTimeout(() => (this.form.sent = true), 2000);
    },
    onValidate() {
      this.form.sent = false;
      this.form.submitted = this.form.errorsCount === 0;
    },
  },
});
