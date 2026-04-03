# Termux Master - Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/Termux-Linux%20en%20Android-green?style=for-the-badge&logo=termux" alt="Termux">
  <img src="https://img.shields.io/badge/Desarrollado%20en-Termux-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Licencia-MIT-yellow?style=for-the-badge">
</p>

> **Nota importante:** Este proyecto fue desarrollado utilizando **Termux** en un dispositivo Android. Todo el código, desde la estructura HTML hasta los estilos CSS y la lógica JavaScript, fue escrito y editado directamente desde la terminal de Termux.

---

## 📱 ¿Qué es Termux Master?

Landing page educativa y completa sobre **Termux**, el emulador de terminal para Android que trae un entorno Linux completo a tu dispositivo móvil sin necesidad de root.

### Características del Proyecto

- ✅ Tema oscuro estilo hacker/terminal con acentos neon (verde/azul/amarillo/morado)
- ✅ Diseño responsivo minimalista y funcional
- ✅ Navegación interactiva con menú slide en móvil y dropdown en desktop
- ✅ Bloques de código copiables con feedback visual
- ✅ Tabs para comandos organizados por categoría
- ✅ FAQ interactivo con acordeón animado
- ✅ Botón "to top" dinámico que aparece al hacer scroll
- ✅ Botón "recargar" para refrescar sin caché
- ✅ Efecto scanlines estilo retro CRT
- ✅ Grid animado en el hero
- ✅ Animaciones de scroll reveal

---

## 🛠️ Stack Tecnológico

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

| Categoría | Tecnología |
|-----------|------------|
| **Entorno de Desarrollo** | Termux (Android) |
| **Editor** | vim / nano (en Termux) |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Sintaxis de Código** | Prism.js |
| **Fuentes** | Google Fonts (JetBrains Mono, IBM Plex Sans, Fira Code) |
| **Hosting** | GitHub Pages |

### Herramientas Usadas en Termux

```bash
# Editores de texto
apt install vim nano

# Git para control de versiones
apt install git

# Servidor local para pruebas
apt install python

# Navegador para testing
wget [browser-tools]
```

---

## 🚀 Cómo Ver el Proyecto

### Opción 1: Servidor Local (desde Termux)

```bash
# Clonar o copiar el proyecto
cd ~/proyectos
git clone https://github.com/tu-usuario/termux-master.git
cd termux-master

# Iniciar servidor HTTP
python -m http.server 8000

# Abrir en navegador
# http://localhost:8000
```

### Opción 2: Ver Archivo Directo

Simplemente abre el archivo `index.html` en cualquier navegador web.

### Opción 3: GitHub Pages

Despliega el proyecto en GitHub Pages:
1. Sube los archivos a un repositorio
2. Ve a **Settings > Pages**
3. Selecciona la rama **main**
4. Guarda y espera el despliegue

---

## 📂 Estructura del Proyecto

```
termux_page/
├── index.html      # Estructura principal
├── styles.css      # Estilos (dark theme + neon + scanlines)
├── script.js       # Funcionalidad interactiva
├── SPEC.md         # Especificaciones del proyecto
└── README.md       # Este archivo
```

---

## 📋 Secciones Incluidas

1. **Hero** - Introducción con ASCII art y typing effect
2. **¿Qué es Termux?** - 6 características principales
3. **Casos de Uso** - 6 escenarios prácticos
4. **Instalación** - Métodos (F-Droid, GitHub)
5. **Configuración Inicial** - 4 pasos esenciales
6. **Comandos Esenciales** - 5 categorías con 40+ comandos
7. **Personalización** - .bashrc, Oh My Zsh, Neofetch
8. **Distros Linux** - Ubuntu, Debian, Arch, Fedora, Kali, Alpine
9. **Entorno Gráfico** - Xfce, LXQt, MATE, KDE + VNC
10. **Requisitos del Sistema** - Mínimo/Recomendado/Ideal
11. **Workstation Móvil** - Los 3 entornos de trabajo
12. **Datos Curiosos** - 8 datos interesantes
13. **FAQ** - 8 preguntas frecuentes
14. **Recursos** - Links útiles y comunidades

---

## 📱 Requisitos del Entorno

### Mínimos (para desarrollo básico)
- Android 7.0+
- 2GB RAM
- Cualquier smartphone moderno

### Recomendados (para mejor experiencia)
- Android 11.0+
- 4GB RAM
- Almacenamiento: 2GB libres

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork del repositorio
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Add nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 🙏 Créditos

- **Termux** - [https://termux.dev](https://termux.dev)
- **F-Droid** - [https://f-droid.org](https://f-droid.org)
- **Prism.js** - [https://prismjs.com](https://prismjs.com)
- **Google Fonts** - [https://fonts.google.com](https://fonts.google.com)

---

<div align="center">

**Desarrollado con ❤️ desde Termux**

*Tu Linux en el bolsillo*

</div>
