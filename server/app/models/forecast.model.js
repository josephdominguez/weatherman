exports.extractSynopsis = (forecastText) => {
    const synopsisRegExp = /SYNOPSIS([\s\S]*?)SHORT TERM/g;
    const match = synopsisRegExp.exec(forecastText);

    if (match) {
        const extractedText = match[1].trim();
        return extractedText;
    } else {
        return "";
    }
}

exports.extractShortTermForecast = (forecastText) => {
    const shortTermRegExp = /SHORT TERM([\s\S]*?)LONG TERM/g;
    const match = shortTermRegExp.exec(forecastText);
  
    if (match) {
      const extractedText = match[1].trim();
      return extractedText;
    } else {
      return "";
    }
}
