export default function CountryCode() {
  return (
    <select
      name="countryCode"
      aria-label="Country code"
      style={{
        background: 'var(--navy3)', color: 'var(--cream)',
        border: '1px solid var(--border)', padding: '.75rem .6rem',
        fontFamily: "'Outfit',sans-serif", fontSize: '.85rem',
        minWidth: '130px', cursor: 'pointer', flexShrink: 0,
      }}
    >
        <option key="+1" value="+1">🇺🇸 +1</option>
        <option key="+44" value="+44">🇬🇧 +44</option>
        <option key="+91" value="+91">🇮🇳 +91</option>
        <option key="+61" value="+61">🇦🇺 +61</option>
        <option key="+1-CA" value="+1-CA">🇨🇦 +1</option>
        <option key="+971" value="+971">🇦🇪 +971</option>
        <option key="+966" value="+966">🇸🇦 +966</option>
        <option key="+65" value="+65">🇸🇬 +65</option>
        <option key="+60" value="+60">🇲🇾 +60</option>
        <option key="+64" value="+64">🇳🇿 +64</option>
        <option key="+353" value="+353">🇮🇪 +353</option>
        <option key="+33" value="+33">🇫🇷 +33</option>
        <option key="+49" value="+49">🇩🇪 +49</option>
        <option key="+39" value="+39">🇮🇹 +39</option>
        <option key="+34" value="+34">🇪🇸 +34</option>
        <option key="+31" value="+31">🇳🇱 +31</option>
        <option key="+46" value="+46">🇸🇪 +46</option>
        <option key="+47" value="+47">🇳🇴 +47</option>
        <option key="+45" value="+45">🇩🇰 +45</option>
        <option key="+81" value="+81">🇯🇵 +81</option>
        <option key="+82" value="+82">🇰🇷 +82</option>
        <option key="+86" value="+86">🇨🇳 +86</option>
        <option key="+55" value="+55">🇧🇷 +55</option>
        <option key="+52" value="+52">🇲🇽 +52</option>
        <option key="+27" value="+27">🇿🇦 +27</option>
        <option key="+234" value="+234">🇳🇬 +234</option>
        <option key="+20" value="+20">🇪🇬 +20</option>
        <option key="+92" value="+92">🇵🇰 +92</option>
        <option key="+880" value="+880">🇧🇩 +880</option>
        <option key="+94" value="+94">🇱🇰 +94</option>
        <option key="+63" value="+63">🇵🇭 +63</option>
        <option key="+62" value="+62">🇮🇩 +62</option>
    </select>
  );
}
