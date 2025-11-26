# Soundverse DNA - Frontend Assignment

This is a pixel-perfect, responsive reproduction of the Soundverse DNA UI, built with **Next.js 14**, **Tailwind CSS**, and **Howler.js** for audio logic.

## 🚀 Live Demo
[https://assign2-dun-gamma.vercel.app/](https://assign2-dun-gamma.vercel.app/)

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Audio Engine:** Howler.js (via `react-howler` logic)
- **State Management:** React Context API (`PlayerContext` & `UIContext`)
- **Fonts:** Inter & Custom Grotesque styles

## ✨ Key Features
1.  **Global Audio Player:**
    - Continuous playback across page navigation.
    - Keyboard controls (Space to Play/Pause, Arrows to Seek).
    - Smooth `slide-up` entrance animation.
2.  **Dynamic Panels:**
    - **DNA Panel:** Collapsible sidebar with responsive behavior (Overlay on Mobile, Side-by-side on Desktop).
    - **Main Content:** Can be hidden/reopened, featuring an "Empty State" placeholder.
3.  **Micro-Interactions:**
    - Smooth hover states on Style Cards (Scale + Glow).
    - Animated sliding toggles in the DNA panel.
    - Tactile active states on sidebar buttons.
4.  **Responsive Design:**
    - Mobile-first approach.
    - Adaptive grid for Style Cards.
    - Dynamic sizing for the Artist Hero section ("Coldplay") to prevent text overflow.

## 📸 Screenshots

| **Desktop View (Main Interface)** | **Mobile View (Responsive)** |
|:---:|:---:|
| ![Desktop View](LINK_TO_DESKTOP_IMAGE_HERE) | ![Mobile View](LINK_TO_MOBILE_IMAGE_HERE) |
| *Full desktop layout with DNA panel open* | *Adaptive layout on smaller screens* |

| **DNA Panel (Controls)** | **Global Player (Active)** |
|:---:|:---:|
| ![DNA Panel](LINK_TO_DNA_PANEL_IMAGE_HERE) | ![Player](LINK_TO_PLAYER_IMAGE_HERE) |
| *Collapsible sidebar with sliding toggles* | *Smooth slide-up player with seeking* |

**Micro-Interactions & Hover States**
![Interactions](LINK_TO_HOVER_STATE_IMAGE_HERE)
*Demonstration of hover glow effects and active states*

## ⚙️ Setup & Run
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/krishnafauj/assign2.git](https://github.com/krishnafauj/assign2.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd assign2
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧠 Design Decisions & Trade-offs
-   **Audio Logic:** I used the Context API combined with `refs` for the audio player to ensure high-performance seeking without re-rendering the entire component tree unnecessarily.
-   **Animations:** Instead of heavy animation libraries, I utilized native CSS transitions and Tailwind's utility classes for better performance and smaller bundle size.
-   **Responsiveness:** The "DNA Panel" switches from `relative` positioning (desktop) to `absolute` positioning (mobile) to maximize screen real estate on smaller devices.