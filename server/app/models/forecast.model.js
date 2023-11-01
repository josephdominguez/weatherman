exports.extractSynopsis = (forecastText) => {
    const synopsisRegExp = /SYNOPSIS([\s\S]*?)&&/g;
    const match = synopsisRegExp.exec(forecastText);

    if (match) {
        const extractedText = match[1].trim();
        return extractedText;
    } else {
        return "";
    }
}

exports.extractShortTerm = (forecastText) => {
    const shortTermRegExp = /SHORT TERM([\s\S]*?)&&/g;
    const match = shortTermRegExp.exec(forecastText);
  
    if (match) {
      const extractedText = match[1].trim();
      return extractedText;
    } else {
      return "";
    }
}
