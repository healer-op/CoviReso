var nickname = document.getElementById("txt");
function redirect () {
  window.location.href = 'https://twitter.com/search?q=verified+' + nickname.value + '+%28bed+OR+beds+OR+icu+OR+oxygen+OR+ventilator+OR+ventilators+OR+test+OR+tests+OR+testing+OR+fabiflu+OR+remdesivir+OR+favipiravir+OR+tocilizumab+OR+plasma+OR+tiffin+OR+food+OR+ambulance+OR+amphotericin+b+OR+amphotericin%29+-"not+verified"+-"unverified"+-"needed"+-"need"+-"needs"+-"required"+-"require"+-"requires"+-"requirement"+-"requirements"&f=live';
};
document.getElementById("btn").addEventListener('click', redirect);