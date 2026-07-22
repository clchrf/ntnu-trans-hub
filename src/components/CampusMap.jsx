import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { mapCategories, mapLocations, mapNote } from '../data/content'
import SectionHeading from './SectionHeading'

export default function CampusMap() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, { scrollWheelZoom: false })
    mapRef.current = map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 貢獻者',
    }).addTo(map)

    const bounds = []

    mapLocations.forEach((loc) => {
      const style = mapCategories[loc.category]
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:16px;height:16px;border-radius:9999px;background:${style?.color || '#161457'};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.35);"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })

      L.marker([loc.lat, loc.lng], { icon }).addTo(map).bindPopup(
        `<div style="font-family:inherit;font-size:13px;">
          <span style="display:inline-block;padding:1px 8px;border-radius:9999px;background:${style?.color || '#161457'};color:white;font-size:10px;margin-bottom:4px;">${loc.category}</span>
          <div style="font-weight:600;color:#161457;">${loc.name}</div>
        </div>`,
      )

      bounds.push([loc.lat, loc.lng])
    })

    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 })

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <section id="map" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        align="center"
        eyebrow="CAMPUS MAP"
        title="校園地圖"
        subtitle="校區、接駁車站牌、美食推薦，一次看在地圖上"
      />

      <div className="mt-12">
        <div ref={containerRef} className="h-[420px] w-full overflow-hidden rounded-3xl shadow-lg md:h-[500px]" />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {Object.entries(mapCategories).map(([label, style]) => (
          <span key={label} className="flex items-center gap-1.5 text-[12px] text-navy-500">
            <span className={`h-2.5 w-2.5 rounded-full ${style.dotClass}`} />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-4 text-center text-[12px] text-navy-400">{mapNote}</p>
    </section>
  )
}
