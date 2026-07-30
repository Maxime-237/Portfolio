// Transforme une liste plate de contributions journalières
// ({ date, count, level }) en grille hebdomadaire (semaine = colonne,
// jour de la semaine = ligne, dimanche en haut) pour affichage sous
// forme de calendrier, comme sur github.com.

export function buildContributionGrid(days) {
  if (!days || days.length === 0) return { weeks: [], monthLabels: [] };

  const byDate = new Map(days.map((d) => [d.date, d]));

  const firstDate = new Date(days[0].date + 'T00:00:00');
  const lastDate = new Date(days[days.length - 1].date + 'T00:00:00');

  // Recule jusqu'au dimanche précédent pour que la première colonne
  // soit une semaine complète.
  const cursor = new Date(firstDate);
  cursor.setDate(cursor.getDate() - cursor.getDay());

  const weeks = [];
  const monthLabels = [];
  let currentWeek = new Array(7).fill(null);
  let lastMonth = -1;

  while (cursor <= lastDate) {
    const dow = cursor.getDay();

    // Un nouveau dimanche démarre une nouvelle semaine : on "vide"
    // (flush) la semaine précédente dans le tableau avant de continuer.
    if (dow === 0 && currentWeek.some((cell) => cell !== null)) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }

    const iso = cursor.toISOString().slice(0, 10);
    currentWeek[dow] = byDate.get(iso) || { date: iso, count: 0, level: 0 };

    const month = cursor.getMonth();
    if (month !== lastMonth) {
      monthLabels.push({ weekIndex: weeks.length, month });
      lastMonth = month;
    }

    cursor.setDate(cursor.getDate() + 1);
  }
  weeks.push(currentWeek); // dernière semaine (potentiellement incomplète)

  return { weeks, monthLabels };
}

const MONTH_NAMES_SHORT = [
  'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc',
];

export function monthLabel(monthIndex) {
  return MONTH_NAMES_SHORT[monthIndex];
}