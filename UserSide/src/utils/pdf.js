import { jsPDF } from "jspdf";

/**
 * Generates an adoption certificate for a pet.
 * @param {string} userName - The name of the adopter.
 * @param {string} petName - The name of the adopted pet.
 * @param {string} date - The date of adoption.
 */
export const generateCertificate = (userName, petName, date) => {
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const certId = "PP-" + Math.random().toString(36).substr(2, 7).toUpperCase();
    const adoptionDate = date || new Date().toLocaleDateString();

    // COLOR PALETTE
    const darkBlue = [46, 75, 129]; // #2E4B81
    const mediumBlue = [90, 143, 204]; // #5A8FCC
    const lightBlue = [217, 226, 243]; // #D9E2F3

    // 1. Outer Border Setup (Full Page Blue)
    doc.setFillColor(...darkBlue);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // 2. Geometric Blue Overlay (The "Angular" bits in the border)
    doc.setFillColor(...mediumBlue);
    // Top-left triangle/shape
    doc.triangle(0, 0, 60, 0, 0, 60, 'F');
    // Bottom-right triangle/shape
    doc.triangle(pageWidth, pageHeight, pageWidth - 60, pageHeight, pageWidth, pageHeight - 60, 'F');
    
    // Additional diagonal overlays for "premium" look
    doc.setGState(new doc.GState({ opacity: 0.3 }));
    doc.setFillColor(255, 255, 255);
    doc.triangle(0, 0, 40, 0, 0, 40, 'F');
    doc.triangle(pageWidth, pageHeight, pageWidth - 40, pageHeight, pageWidth, pageHeight - 40, 'F');
    doc.setGState(new doc.GState({ opacity: 1 }));

    // 3. Central White Card
    const margin = 15;
    doc.setFillColor(255, 255, 255);
    doc.rect(margin, margin, pageWidth - (margin * 2), pageHeight - (margin * 2), 'F');

    // 4. TOP SECTION
    // Top Left: Logo Placeholder
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("PetPal", 25, 28);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Your pet's best friend", 25, 32);

    // Top Right: ID and Date
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`Certificate ID: ${certId}`, pageWidth - 25, 28, { align: "right" });
    doc.text(`Awarded on: ${adoptionDate}`, pageWidth - 25, 32, { align: "right" });

    // 5. MAIN TITLE
    doc.setFont("helvetica", "bold");
    doc.setFontSize(32);
    doc.setTextColor(...darkBlue);
    doc.text(`${petName?.toUpperCase().includes('CAT') ? 'CAT' : 'PET'} ADOPTION CERTIFICATE`, pageWidth / 2, 55, { align: "center" });

    // 6. CERTIFICATION TEXT
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text("This is to certify that", pageWidth / 2, 70, { align: "center" });

    // 7. ADOPTER NAME (Large Serif/Italic)
    doc.setFont("times", "italic");
    doc.setFontSize(48);
    doc.setTextColor(40, 40, 40);
    doc.text(userName || "Valued Adopter", pageWidth / 2, 90, { align: "center" });

    // 8. ADOPTION DETAILS
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text(`had provided a new loving home to ${petName || "a furry friend"}`, pageWidth / 2, 105, { align: "center" });
    doc.text(`adopted on ${adoptionDate}.`, pageWidth / 2, 112, { align: "center" });

    // 9. QUOTE / MOTIVATIONAL TEXT
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    const quote = "This adoption marks the beginning of a beautiful journey filled\nwith love, trust, and endless companionship.";
    doc.text(quote, pageWidth / 2, 125, { align: "center" });

    // 10. BOTTOM SECTION (Signatures & Logo)
    const bottomY = pageHeight - 35;

    // Left Signature: Organization
    // Shared Center Signature: Organization Representative
    doc.setLineWidth(0.3);
    doc.setDrawColor(150, 150, 150);
    const centerX = pageWidth / 2;
    doc.line(centerX - 35, bottomY, centerX + 35, bottomY);
    
    // The "Sign" (Stylized)
    doc.setFont("times", "bolditalic");
    doc.setFontSize(16);
    doc.setTextColor(...darkBlue);
    doc.text("PetPal Official", centerX, bottomY - 2, { align: "center" });
    
    // The Title
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Organization Representative", centerX, bottomY + 5, { align: "center" });

    // Logo Overlay
    doc.setFontSize(16);
    doc.text("🐾", centerX, bottomY - 12, { align: "center" });

    // 11. Subtle background watermark (optional but adds "real" feel)
    doc.setGState(new doc.GState({ opacity: 0.03 }));
    doc.setFontSize(150);
    doc.text("🐾", pageWidth / 2, pageHeight / 2 + 30, { align: "center" });
    doc.setGState(new doc.GState({ opacity: 1 }));

    // Save the PDF
    doc.save(`PetPal_Certificate_${petName || "Pet"}.pdf`);
};

