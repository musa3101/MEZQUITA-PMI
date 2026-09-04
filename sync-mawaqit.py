#!/usr/bin/env python3
"""
Sincronizador automático del Horario Oficial de Mawaqit
Mezquita Arrahma — Palma de Mallorca (ID Mawaqit: 22839)
URL: https://mawaqit.net/es/mezquita-rahma-palma-de-mallorca-07005-spain
"""

import json
import re
import urllib.request
import sys
import os

MAWAQIT_URL = "https://mawaqit.net/es/mezquita-rahma-palma-de-mallorca-07005-spain"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
MAIN_JS = os.path.join(SCRIPT_DIR, "assets", "main.js")
HORARIO_HTML = os.path.join(SCRIPT_DIR, "assets", "horario-mensual.html")
DATA_JSON = os.path.join(SCRIPT_DIR, "assets", "mawaqit-data.json")

def fetch_mawaqit():
    print(f"📡 Conectando con Mawaqit: {MAWAQIT_URL} ...")
    req = urllib.request.Request(
        MAWAQIT_URL,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
    )
    with urllib.request.urlopen(req, timeout=15) as res:
        html = res.read().decode("utf-8")
    
    m = re.search(r"let confData = ({.*?});", html)
    if not m:
        raise ValueError("No se encontró 'confData' en la respuesta HTML de Mawaqit.")
    
    conf = json.loads(m.group(1))
    return conf

def update_main_js(calendar_js_str):
    if not os.path.exists(MAIN_JS):
        print(f"⚠️ {MAIN_JS} no encontrado.")
        return
    with open(MAIN_JS, "r", encoding="utf-8") as f:
        content = f.read()
    
    start_marker = "const MAWAQIT_CALENDAR = ["
    end_marker = "];\n// Prayer names mapped to calendar indices"
    
    idx1 = content.find(start_marker)
    idx2 = content.find(end_marker)
    if idx1 == -1 or idx2 == -1:
        print("⚠️ No se encontraron los marcadores de MAWAQIT_CALENDAR en main.js")
        return
    
    updated = content[:idx1] + calendar_js_str + content[idx2+2:]
    with open(MAIN_JS, "w", encoding="utf-8") as f:
        f.write(updated)
    print("✅ assets/main.js actualizado con éxito.")

def update_horario_html(calendar_js_str):
    if not os.path.exists(HORARIO_HTML):
        print(f"⚠️ {HORARIO_HTML} no encontrado.")
        return
    with open(HORARIO_HTML, "r", encoding="utf-8") as f:
        content = f.read()
    
    start_marker = "const MAWAQIT_CALENDAR = ["
    end_marker = "];\n\n        const MONTH_NAMES = ["
    
    idx1 = content.find(start_marker)
    idx2 = content.find(end_marker)
    if idx1 == -1 or idx2 == -1:
        print("⚠️ No se encontraron los marcadores de MAWAQIT_CALENDAR en horario-mensual.html")
        return
    
    updated = content[:idx1] + calendar_js_str + content[idx2+2:]
    with open(HORARIO_HTML, "w", encoding="utf-8") as f:
        f.write(updated)
    print("✅ assets/horario-mensual.html actualizado con éxito.")

def save_json(conf):
    data = {
        "updated_at": os.popen("date -u +\"%Y-%m-%dT%H:%M:%SZ\"").read().strip(),
        "mosque_name": conf.get("name", "مسجد الرحمة - PALMA DE MALLORCA"),
        "timezone": conf.get("timezone", "Europe/Madrid"),
        "jumua": conf.get("jumua", "14:00"),
        "today_times": conf.get("times", []),
        "today_shuruq": conf.get("shuruq", ""),
        "iqama_calendar": conf.get("iqamaCalendar", []),
        "calendar": conf.get("calendar", [])
    }
    with open(DATA_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ {DATA_JSON} generado con éxito.")

def main():
    try:
        conf = fetch_mawaqit()
        calendar = conf.get("calendar", [])
        if len(calendar) != 12:
            raise ValueError(f"Se esperaban 12 meses de calendario, se obtuvieron {len(calendar)}")
        
        cal_str = "const MAWAQIT_CALENDAR = [\n"
        for i, m in enumerate(calendar):
            cal_str += "    " + json.dumps(m) + (",\n" if i < len(calendar) - 1 else "\n")
        cal_str += "];"
        
        update_main_js(cal_str)
        update_horario_html(cal_str)
        save_json(conf)
        
        print("\n🎉 Sincronización oficial de Mawaqit completada con éxito.")
        print(f"   - Rezos hoy: Fajr {calendar[8]['4'][0]} | Shuruq {calendar[8]['4'][1]} | Dhuhr {calendar[8]['4'][2]} | Asr {calendar[8]['4'][3]} | Maghrib {calendar[8]['4'][4]} | Isha {calendar[8]['4'][5]}")
        print(f"   - Yumuah: {conf.get('jumua', '14:00')}")
    except Exception as e:
        print(f"❌ Error al sincronizar con Mawaqit: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
