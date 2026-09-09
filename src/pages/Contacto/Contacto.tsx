// Turnstile
import { Turnstile } from "@marsidev/react-turnstile";
// Iconos
import {
	Check,
	Copy,
	Loader2,
	Mail,
	MapPin,
	MessageCircle,
	Send,
} from "lucide-react";
// React
import { useEffect, useState } from "react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Contacto
const Contacto = () => {
	// 1. Estado del campo copiado (email o teléfono)
	const [copiedField, setCopiedField] = useState<string | null>(null);
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 2. Actualizar título SEO
	useEffect(() => {
		document.title = t.seo.contacto;
	}, [t.seo.contacto]);

	// 3. Estado del formulario
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMsg, setErrorMsg] = useState("");

	// 4. Copiar texto al portapapeles
	const handleCopy = (text: string, field: string) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2000);
	};

	// 5. Actualizar campo del formulario
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	// 6. Enviar formulario
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMsg("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...form, turnstileToken }),
			});

			const data = (await res.json()) as { success: boolean; error?: string };

			if (!res.ok || !data.success) {
				throw new Error(data.error || "Error desconocido");
			}

			setStatus("success");
			setForm({ name: "", email: "", subject: "", message: "" });
			setTurnstileToken(null);
		} catch (err) {
			setStatus("error");
			setErrorMsg(err instanceof Error ? err.message : t.contacto.error);
		}
	};

	return (
		<section className="min-h-screen bg-page-bg text-text-main pt-32 pb-24 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-5xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* Encabezado */}
				<div className="text-center mb-16 sm:mb-20 space-y-3">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
						{t.contacto.title}
					</h2>
					<p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
						{t.contacto.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
					{/* Tarjetas de contacto */}
					<div className="lg:col-span-2 space-y-6">
						{/* Email */}
						<div className="bg-surface-bg p-5 sm:p-6 rounded-xl border border-surface-border shadow-sm hover:shadow-md transition-shadow group">
							<div className="flex items-start justify-between mb-4">
								<div className="p-2.5 bg-accent-muted text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
									<Mail size={22} />
								</div>
								<button
									type="button"
									onClick={() => handleCopy("ivangtx19@proton.me", "email")}
									className="text-text-muted/50 hover:text-text-muted transition-colors"
									title={t.contacto.copiar}
								>
									{copiedField === "email" ? (
										<Check size={18} className="text-emerald-500" />
									) : (
										<Copy size={18} />
									)}
								</button>
							</div>
							<h3 className="text-base font-bold text-text-main mb-1">
								{t.contacto.emailTitulo}
							</h3>
							<p className="text-text-muted text-xs sm:text-sm mb-3">
								{t.contacto.emailDesc}
							</p>
							<a
								href="mailto:ivangtx19@proton.me"
								className="text-sm sm:text-base font-semibold text-text-main hover:text-accent transition-colors break-all"
							>
								ivangtx19@proton.me
							</a>
						</div>

						{/* WhatsApp */}
						<div className="bg-surface-bg p-5 sm:p-6 rounded-xl border border-surface-border shadow-sm hover:shadow-md transition-shadow group">
							<div className="flex items-start justify-between mb-4">
								<div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
									<MessageCircle size={22} />
								</div>
								<button
									type="button"
									onClick={() => handleCopy("+525657455765", "phone")}
									className="text-text-muted/50 hover:text-text-muted transition-colors"
									title={t.contacto.copiarPhone}
								>
									{copiedField === "phone" ? (
										<Check size={18} className="text-emerald-500" />
									) : (
										<Copy size={18} />
									)}
								</button>
							</div>
							<h3 className="text-base font-bold text-text-main mb-1">
								{t.contacto.whatsappTitulo}
							</h3>
							<p className="text-text-muted text-xs sm:text-sm mb-3">
								{t.contacto.whatsappDesc}
							</p>
							<a
								href="https://wa.me/525657455765"
								target="_blank"
								rel="noreferrer"
								className="text-sm sm:text-base font-semibold text-text-main hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
							>
								+52 56 5745 5765
							</a>
						</div>

						{/* Ubicación */}
						<div className="bg-surface-bg p-5 sm:p-6 rounded-xl border border-surface-border shadow-sm flex items-center gap-4">
							<div className="p-2.5 bg-surface-border/50 text-text-muted rounded-xl">
								<MapPin size={22} />
							</div>
							<div>
								<h3 className="text-sm font-bold text-text-main">
									{t.contacto.ubicacionTitulo}
								</h3>
								<p className="text-text-muted text-xs sm:text-sm">
									{t.contacto.ubicacionValor}
								</p>
							</div>
						</div>
					</div>

					{/* Formulario */}
					<div className="lg:col-span-3">
						<div className="bg-surface-bg p-6 sm:p-8 rounded-xl border border-surface-border shadow-sm">
							<h3 className="text-lg sm:text-xl font-bold mb-6 text-text-main">
								{t.contacto.formTitulo}
							</h3>

							{/* Mensaje de éxito */}
							{status === "success" && (
								<div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-xl flex items-center gap-3 text-sm">
									<Check size={18} />
									<span className="font-medium">{t.contacto.success}</span>
								</div>
							)}

							{/* Mensaje de error */}
							{status === "error" && (
								<div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 rounded-xl text-sm">
									{errorMsg || t.contacto.error}
								</div>
							)}

							<form onSubmit={handleSubmit} className="space-y-5">
								{/* Nombre y Email */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
									<div className="space-y-1.5">
										<label
											htmlFor="name"
											className="text-xs font-semibold text-text-muted"
										>
											{t.contacto.labelNombre}
										</label>
										<input
											type="text"
											id="name"
											value={form.name}
											onChange={handleChange}
											required
											placeholder={t.contacto.placeholderNombre}
											className="w-full px-3.5 py-2.5 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none text-sm"
										/>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="email"
											className="text-xs font-semibold text-text-muted"
										>
											{t.contacto.labelEmail}
										</label>
										<input
											type="email"
											id="email"
											value={form.email}
											onChange={handleChange}
											required
											placeholder={t.contacto.placeholderEmail}
											className="w-full px-3.5 py-2.5 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none text-sm"
										/>
									</div>
								</div>

								{/* Asunto */}
								<div className="space-y-1.5">
									<label
										htmlFor="subject"
										className="text-xs font-semibold text-text-muted"
									>
										{t.contacto.labelAsunto}
									</label>
									<input
										type="text"
										id="subject"
										value={form.subject}
										onChange={handleChange}
										required
										placeholder={t.contacto.placeholderAsunto}
										className="w-full px-3.5 py-2.5 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none text-sm"
									/>
								</div>

								{/* Mensaje */}
								<div className="space-y-1.5">
									<label
										htmlFor="message"
										className="text-xs font-semibold text-text-muted"
									>
										{t.contacto.labelMensaje}
									</label>
									<textarea
										id="message"
										rows={5}
										value={form.message}
										onChange={handleChange}
										required
										placeholder={t.contacto.placeholderMensaje}
										className="w-full px-3.5 py-2.5 rounded-lg bg-page-bg border border-surface-border focus:border-accent focus:bg-surface-bg focus:ring-2 focus:ring-accent/30 outline-none resize-none text-sm"
									/>
								</div>

								{/* Turnstile */}
								<Turnstile
									siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
									onSuccess={(token) => setTurnstileToken(token)}
								/>

								{/* Botón enviar */}
								<button
									type="submit"
									disabled={status === "loading" || !turnstileToken}
									className="w-full bg-accent hover:opacity-90 disabled:opacity-50 text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
								>
									{status === "loading" ? (
										<Loader2 size={18} className="animate-spin" />
									) : (
										<Send size={18} />
									)}
									{status === "loading"
										? t.contacto.enviando
										: t.contacto.enviar}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacto;
