/* Countdown to test dates, rendered as stat-row items in the dark hero.
   Always computed in US Eastern time (America/New_York), independent of
   the visitor's device timezone. */

(function () {
  // ---- EDIT THESE once your son's school confirms exact dates ----
  var TESTS = [
    {
      name: 'PSAT 10',
      // Testing window opens Mar 1, 2027; school picks the exact day.
      date: { y: 2027, m: 3, d: 1 },
      confirmed: false
    },
    {
      name: 'PSAT/NMSQT',
      // Fall 2027 junior-year test; College Board sets the exact
      // October date later in 2027 — placeholder for now.
      date: { y: 2027, m: 10, d: 13 },
      confirmed: false
    }
  ];
  // ------------------------------------------------------------------

  function easternNowAsUTC() {
    var fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false
    });
    var parts = {};
    fmt.formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
    return Date.UTC(
      parseInt(parts.year, 10), parseInt(parts.month, 10) - 1, parseInt(parts.day, 10),
      parseInt(parts.hour, 10), parseInt(parts.minute, 10), parseInt(parts.second, 10)
    );
  }

  function targetAsUTC(d) { return Date.UTC(d.y, d.m - 1, d.d, 0, 0, 0); }

  function render() {
    var container = document.getElementById('hero-stats');
    if (!container) return;

    var nowUTC = easternNowAsUTC();
    container.innerHTML = '';

    TESTS.forEach(function (t) {
      var diffMs = targetAsUTC(t.date) - nowUTC;
      var days = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
      var dateLabel = new Date(Date.UTC(t.date.y, t.date.m - 1, t.date.d))
        .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

      var stat = document.createElement('div');
      stat.className = 'stat';
      stat.innerHTML =
        '<span class="stat-label">' + t.name + (t.confirmed ? '' : ' (date TBD)') + '</span>' +
        '<span class="stat-value">' + days + ' days &middot; ' + dateLabel + '</span>';
      container.appendChild(stat);
    });
  }

  render();
  setInterval(render, 60000);
})();
