// React

// Iconos
import {
	Award,
	BookOpen,
	Calendar,
	CheckCircle2,
	GraduationCap,
} from "lucide-react";
import { useEffect } from "react";
// Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";

// Formacion
const Formacion = () => {
	const { ref, isVisible } = useScrollAnimation(0.05);
	const t = useTranslation();

	// 1. Actualizar título SEO
	useEffect(() => {
		document.title = t.seo.formacion;
	}, [t.seo.formacion]);
	// Datos de formación académica
	const educationData = [
		// Código Facilito
		{
			id: 1,
			institution: "Código Facilito",
			title: "Desarrollador Backend | DevOps & Cloud Computing",
			date: "Nov 2024 - Dic 2025",
			type: "Bootcamp / Especialización",
			description:
				"Formación especializada en arquitectura Backend y despliegue en la nube. Enfoque en Microsoft Azure, CI/CD y buenas prácticas de desarrollo.",
			skills: [
				"Cloud Computing",
				"Microsoft Azure",
				"DevOps",
				"Node.js",
				"IA Generativa",
				"AngularJS",
			],
			logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGvT-5yZf8V3w/company-logo_200_200/company-logo_200_200/0/1719256667793?e=1741824000&v=beta&t=H-SgF_qXz-uE7j9c7d8s9d8s9d8s9d8s9d8s9d8s9d8",
			certified: true,
		},
		// Alura Latam / Oracle Next Education
		{
			id: 2,
			institution: "Alura Latam / Oracle Next Education",
			title: "Desarrollador Frontend & Cloud Computing (OCI)",
			date: "Ene 2024 - Oct 2024",
			type: "Bootcamp / Especialización",
			description:
				"Graduado del programa Oracle Next Education (ONE). Desarrollo de aplicaciones web completas, bases de datos y fundamentos de infraestructura en la nube.",
			skills: [
				"React.js",
				"SQL & MySQL",
				"Oracle Cloud (OCI)",
				"Git/GitHub",
				"Metodologías Ágiles",
				"HTML5 & CSS3",
			],
			logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGHj4y1yZf8V3w/company-logo_200_200/company-logo_200_200/0/1630616667793?e=1741824000&v=beta&t=uE7j9c7d8s9d8s9d8s9d8s9d8s9d8s9d8s9d8s9d8",
			certified: true,
		},
		// CECYTEM Chimalhuacán II
		{
			id: 3,
			institution: "CECYTEM Chimalhuacán II",
			title: "Técnico en Programación",
			date: "Jun 2017 - Jun 2020",
			type: "Bachillerato Tecnológico",
			description:
				"Bases fundamentales de la lógica de programación, mantenimiento de equipos, redes informáticas y desarrollo de software estructurado.",
			skills: [
				"Lógica de Programación",
				"Bases de Datos",
				"Redes",
				"Soporte Técnico",
				"Java (Fundamentos)",
			],
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8qZ8&s",
			certified: true,
		},
	];

	return (
		<section className="min-h-screen bg-page-bg text-text-main pt-32 pb-24 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
			<div
				ref={ref as React.RefObject<HTMLDivElement>}
				className={`w-full max-w-5xl mx-auto animate-on-scroll ${isVisible ? "visible" : ""}`}
			>
				{/* Encabezado */}
				<div className="text-center mb-16 sm:mb-20 space-y-3">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
						{t.formacion.title}
					</h2>
					<p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
						{t.formacion.subtitle}
					</p>
				</div>

				{/* Lista de formación */}
				<div className="space-y-8">
					{educationData.map((edu) => (
						<div
							key={edu.id}
							className="bg-surface-bg rounded-xl p-6 md:p-8 border border-surface-border shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] relative overflow-hidden group"
						>
							<div className="absolute -right-6 -bottom-6 text-page-bg group-hover:text-accent-muted/50">
								<Award size={180} strokeWidth={0.5} />
							</div>
							<div className="relative z-10 flex flex-col md:flex-row gap-6">
								{/* Info del curso */}
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<span className="bg-accent-muted text-accent p-2 rounded-lg">
											<GraduationCap size={20} />
										</span>
										<span className="text-xs font-bold text-accent uppercase tracking-wider">
											{edu.type}
										</span>
									</div>
									<h3 className="text-lg sm:text-xl font-bold text-text-main mb-2">
										{edu.title}
									</h3>

									<div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted mb-3.5 font-medium">
										<span className="flex items-center gap-1.5">
											<BookOpen size={15} className="text-accent" />
											{edu.institution}
										</span>
										<span className="hidden md:inline text-surface-border">
											|
										</span>
										<span className="flex items-center gap-1.5 bg-surface-border/50 px-2.5 py-0.5 rounded-full text-xs text-text-main">
											<Calendar size={13} />
											{edu.date}
										</span>
									</div>

									<p className="text-text-muted text-sm leading-relaxed mb-5 max-w-2xl">
										{edu.description}
									</p>

									{/* Competencias */}
									<div>
										<h4 className="text-xs font-bold text-text-main mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
											<CheckCircle2 size={13} className="text-accent" />{" "}
											{t.formacion.competencias}
										</h4>
										<div className="flex flex-wrap gap-2">
											{edu.skills.map((skill) => (
												<span
													key={skill}
													className="px-2.5 py-1 bg-surface-border/30 text-text-muted text-xs font-medium rounded-md border border-surface-border group-hover:border-accent-muted group-hover:bg-page-bg transition-colors"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>
								{/* Estado (completado / en curso) */}
								<div className="md:w-1/4 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-surface-border/50 pt-6 md:pt-0 md:pl-6 mt-6 md:mt-0">
									{edu.certified ? (
										<div className="text-center">
											<div className="w-14 h-14 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-emerald-600 dark:text-emerald-400">
												<Award size={28} />
											</div>
											<span className="block font-bold text-emerald-600 dark:text-emerald-400 text-sm">
												{t.formacion.completado}
											</span>
											<span className="text-xs text-text-muted">
												{t.formacion.certificado}
											</span>
										</div>
									) : (
										<div className="text-center">
											<div className="w-14 h-14 bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-sky-600 dark:text-sky-400 animate-pulse">
												<BookOpen size={28} />
											</div>
											<span className="block font-bold text-sky-600 dark:text-sky-400 text-sm">
												{t.formacion.enCurso}
											</span>
											<span className="text-xs text-text-muted">
												{t.formacion.cursando}
											</span>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Formacion;
