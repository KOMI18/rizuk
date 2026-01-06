"use client"

import { useEffect, useState } from "react"

const COOKIE_KEY = "cookie-consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted")
    setVisible(false)
  }

  const Cookies = () => {
    localStorage.setItem(COOKIE_KEY, "refused")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F2854] text-white">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-2xl text-white leading-relaxed max-w-3xl">
          Nous utilisons des cookies pour améliorer votre expérience, analyser le
          trafic et personnaliser le contenu. Vous pouvez accepter ou refuser
          l’utilisation des cookies non essentiels.
        </p>

        <div className="flex gap-3">
          <button
            onClick={Cookies}
            className="px-4 py-2 rounded-lg border border-white/40 text-white hover:bg-white/10 transition"
          >
            Refuser
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-lg bg-white text-[#0F2854] font-semibold hover:bg-gray-100 transition"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
