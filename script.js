const companies = [
  [1, "ACI Formulations", "www.aci-bd.com/acifl/", "https://dsebd.org/displayCompany.php?name=ACIFORMULA"],
  [2, "ACME Laboratories", "www.acmeglobal.com", "https://dsebd.org/displayCompany.php?name=ACMELAB"],
  [3, "Apex Footwear", "www.apexfootwearltd.com", "https://dsebd.org/displayCompany.php?name=APEXFOOT"],
  [4, "Asiatic Laboratories", "www.asiaticlaboratories.com", "https://dsebd.org/displayCompany.php?name=ASIATICLAB"],
  [5, "Bangladesh Submarine Cables", "www.bscplc.gov.bd", "https://dsebd.org/displayCompany.php?name=BSCPLC"],
  [6, "Bata Bangladesh", "www.batabd.com", "https://dsebd.org/displayCompany.php?name=BATASHOE"],
  [7, "Beacon Pharmaceutical", "www.beaconpharma.com.bd", "https://dsebd.org/displayCompany.php?name=BEACONPHAR"],
  [8, "Berger Paints Bangladesh", "www.bergerbd.com", "https://dsebd.org/displayCompany.php?name=BERGERPBL"],
  [9, "BSRM Steel", "www.bsrm.com", "https://dsebd.org/displayCompany.php?name=BSRMSTEEL"],
  [10, "Beximco Pharmaceutical", "www.beximcopharma.com", "https://dsebd.org/displayCompany.php?name=BXPHARMA"],
  [11, "British American Tobacco Bangladesh", "www.batbangladesh.com", "https://dsebd.org/displayCompany.php?name=BATBC"],
  [12, "Crown Cement", "www.crowncement.com", "https://dsebd.org/displayCompany.php?name=CROWNCEMNT"],
  [13, "GPH Isphat", "www.gphispat.com.bd", "https://dsebd.org/displayCompany.php?name=GPHISPAT"],
  [14, "Grameenphone", "www.grameenphone.com", "https://dsebd.org/displayCompany.php?name=GP"],
  [15, "Heidelberg Materials", "www.heidelbergmaterialsbd.com", "https://dsebd.org/displayCompany.php?name=HEIDELBCEM"],
  [16, "Ibn Sina Pharmaceutical", "www.ibnsinapharma.com", "https://dsebd.org/displayCompany.php?name=IBNSINA"],
  [17, "Ifad Autos", "www.ifadautos.com", "https://dsebd.org/displayCompany.php?name=IFADAUTOS"],
  [18, "Jamuna Oil", "www.jamunaoil.gov.bd", "https://dsebd.org/displayCompany.php?name=JAMUNAOIL"],
  [19, "JMI Hospital Requisite", "www.jhrml-bd.com", "https://dsebd.org/displayCompany.php?name=JHRML"],
  [20, "Kohinoor Chemical", "https://www.orion-group.net/index.php/concern/9/30/kohinoor-chemical-company-bd-ltd", "https://dsebd.org/displayCompany.php?name=KOHINOOR"],
  [21, "Lafarge Holcim", "www.lafargeholcim.com.bd", "https://dsebd.org/displayCompany.php?name=LHB"],
  [22, "Linde Bangladesh", "www.linde.com.bd", "https://dsebd.org/displayCompany.php?name=LINDEBD"],
  [23, "Marico Bangladesh", "www.marico.com/bangladesh", "https://dsebd.org/displayCompany.php?name=MARICO"],
  [24, "Meghna Petroleum", "www.mpl.gov.bd", "https://dsebd.org/displayCompany.php?name=MPETROLEUM"],
  [25, "Mobil Bangladesh", "www.mjlbd.com", "https://dsebd.org/displayCompany.php?name=MJLBD"],
  [26, "Olympic Industries", "www.olympicbd.com", "https://dsebd.org/displayCompany.php?name=OLYMPIC"],
  [27, "Padma Oil", "www.pocl.gov.bd", "https://dsebd.org/displayCompany.php?name=PADMAOIL"],
  [28, "Premier Cement", "www.premiercement.com", "https://dsebd.org/displayCompany.php?name=PREMIERCEM"],
  [29, "Rangpur Dairy & Food Products", "www.rdmilk.com", "https://dsebd.org/displayCompany.php?name=RDFOOD"],
  [30, "Reckitt Bangladesh", "www.reckitt.com", "https://dsebd.org/displayCompany.php?name=RECKITTBEN"],
  [31, "Renata", "www.renata-ltd.com", "https://dsebd.org/displayCompany.php?name=RENATA"],
  [32, "Robi", "www.robi.com.bd", "https://dsebd.org/displayCompany.php?name=ROBI"],
  [33, "Singer Bangladesh", "www.singerbd.com", "https://dsebd.org/displayCompany.php?name=SINGERBD"],
  [34, "Sonali Paper & Board Mills", "www.spbmlbd.com", "https://dsebd.org/displayCompany.php?name=SONALIPAPR"],
  [35, "Square Pharmaceutical", "www.squarepharma.com.bd", "https://dsebd.org/displayCompany.php?name=SQURPHARMA"],
  [36, "Square Textile", "www.textile.squaregroup.com", "https://dsebd.org/displayCompany.php?name=SQUARETEXT"],
  [37, "Techno Drugs", "www.technodrugsltd.com", "https://dsebd.org/displayCompany.php?name=TECHNODRUG"],
  [38, "Unilever Bangladesh", "www.unilever.com.bd", "https://dsebd.org/displayCompany.php?name=UNILEVERCL"],
  [39, "United Power", "www.unitedpowerbd.com", "https://dsebd.org/displayCompany.php?name=UPGDCL"],
  [40, "Walton Hi-tech Industries", "www.waltonhil.com", "https://dsebd.org/displayCompany.php?name=WALTONHIL"]
];

const tableBody = document.getElementById("companyTable");

companies.forEach(([serial, name, website, dse]) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td data-label="Serial">${serial}</td>
    <td data-label="Company Name">${name}</td>
    <td data-label="Website"><a href="http://${website}" target="_blank">${website}</a></td>
    <td data-label="DSE Link"><a href="${dse}" target="_blank">${dse}</a></td>
  `;
  tableBody.appendChild(row);
});