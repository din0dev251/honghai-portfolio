"use client";

import { Button } from "@/components/ui/button";
import { portfolioContactInfo } from "@/data/portfolio";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikField from "@/components/CustomFieldsFormik/FormikField";
import InputField from "@/components/CustomFieldsFormik/InputField";
import TextareaField from "@/components/CustomFieldsFormik/TextareaField";
import { showSuccess, showError } from "@/utils/toast";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Contact() {
  const t = useTranslations("Contact");
  
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required(t("name_required")),
        email: Yup.string().email(t("email_invalid")).required(t("email_required")),
        subject: Yup.string().required(t("subject_required")),
        message: Yup.string().required(t("message_required")),
      }),
    [t]
  );
  return (
    <section
      id="contact"
      className="py-16 mobile:py-20 md:py-24 lg:py-32 bg-muted/50 px-4 mobile:px-6 md:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-base mobile:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mobile:text-3xl font-heading font-semibold mb-6">
                {t("contact_info")}
              </h3>
              <div className="space-y-4">
                {portfolioContactInfo.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-1">{contact.label}</h4>
                        <p className="font-body text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-6 mobile:p-8 rounded-2xl border border-border">
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  setSubmitting(true);
                  const response = await fetch(`${window.location.origin}/api/contact`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.error || "Failed to send message");
                  }

                  showSuccess(t("success_message"));
                  resetForm();
                } catch (error: any) {
                  showError(error.message || t("error_message"));
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <FormikField
                    component={InputField}
                    name="name"
                    label={t("name")}
                    placeholder={t("name_placeholder")}
                    required
                    className="font-body"
                  />
                  <FormikField
                    component={InputField}
                    name="email"
                    type="email"
                    label={t("email")}
                    placeholder={t("email_placeholder")}
                    required
                    className="font-body"
                  />
                  <FormikField
                    component={InputField}
                    name="subject"
                    label={t("subject")}
                    placeholder={t("subject_placeholder")}
                    required
                    className="font-body"
                  />
                  <FormikField
                    component={TextareaField}
                    name="message"
                    label={t("message")}
                    placeholder={t("message_placeholder")}
                    rows={6}
                    required
                    className="font-body resize-none"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-heading font-semibold"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    {t("send_message")}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
