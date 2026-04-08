import { motion } from "framer-motion";
import {
  Mail,
  User,
  Building,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden mt-18 lg:mt-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-950/30 via-background to-blue-950/30" />

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 md:py-20">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Section - Info */}
            <motion.div
              className="lg:col-span-2 text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Discutons ensemble
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Parlons de votre{" "}
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  projet
                </span>
              </h1>

              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto lg:mx-0 text-pretty">
                Notre équipe d&apos;experts est prête à transformer vos idées en
                réalité. Réponse garantie sous 24h.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
                {[
                  { value: "150+", label: "Projets" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24h", label: "Réponse" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Section - Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="backdrop-blur-xl border-border/50 shadow-2xl shadow-cyan-500/5 bg-black/5">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Formulaire de contact
                      </CardTitle>
                      <CardDescription>
                        Remplissez le formulaire ci-dessous
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <form className="space-y-5">
                    <FieldGroup>
                      {/* Row 1: Nom + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel className="text-sm font-medium text-foreground">
                            Nom complet
                          </FieldLabel>
                          <InputGroup>
                            <InputGroupAddon align="inline-start">
                              <User className="w-4 h-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                              type="text"
                              placeholder="Jean Dupont"
                            />
                          </InputGroup>
                        </Field>

                        <Field>
                          <FieldLabel className="text-sm font-medium text-foreground">
                            Email professionnel
                          </FieldLabel>
                          <InputGroup>
                            <InputGroupAddon align="inline-start">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                            </InputGroupAddon>
                            <InputGroupInput
                              type="email"
                              placeholder="jean@entreprise.com"
                            />
                          </InputGroup>
                        </Field>
                      </div>

                      {/* Entreprise */}
                      <Field>
                        <FieldLabel className="text-sm font-medium text-foreground">
                          Entreprise
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupAddon align="inline-start">
                            <Building className="w-4 h-4 text-muted-foreground" />
                          </InputGroupAddon>
                          <InputGroupInput
                            type="text"
                            placeholder="Nom de votre entreprise"
                          />
                        </InputGroup>
                      </Field>

                      {/* Message */}
                      <Field>
                        <FieldLabel className="text-sm font-medium text-foreground">
                          Parlez-nous de votre projet
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupAddon align="block-start">
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              Votre message
                            </span>
                          </InputGroupAddon>
                          <InputGroupTextarea
                            rows={4}
                            placeholder="Décrivez brièvement vos besoins, objectifs et délais souhaités..."
                          />
                        </InputGroup>
                      </Field>
                    </FieldGroup>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer le message
                      </Button>
                    </motion.div>

                    <p className="text-center text-xs text-muted-foreground pt-2">
                      En soumettant ce formulaire, vous acceptez d&apos;être
                      contacté par notre équipe.
                      <br />
                      <span className="text-cyan-500/70">
                        Vos données sont protégées et confidentielles.
                      </span>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  );
}
