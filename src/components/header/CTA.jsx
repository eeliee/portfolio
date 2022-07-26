import React from "react";
import CV from "../../assets/CV.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Télécharger le CV</a>
            <a href="src/components/header/CTA#contact" className="btn btn-primary">Contactez-moi</a>

        </div>
    );
}

export default CTA;