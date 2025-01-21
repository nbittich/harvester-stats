**I took those two that looks to be duplicates:**

- https://lokaalbeslist.vlaanderen.be/agendapunten/3d4a4900-7122-11ef-8607-a992b50ba983
- https://lokaalbeslist.vlaanderen.be/agendapunten/3bcd3510-7537-11ef-8607-a992b50ba983

**They were derived from different uris (notice one part of the path is slightly different):**

- https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst
- https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst

**RDFa produced by the first link:**

```ttl
@prefix rdfa: <http://www.w3.org/ns/rdfa#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix org: <http://www.w3.org/ns/org#> .

<https://rdfa.info/play/>
   rdfa:usesVocabulary <http://data.vlaanderen.be/ns/besluit#> .
<https://boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst>
   rdf:type foaf:Document;
   rdf:type <https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee>;
   dc:type <https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee>;
   <http://data.europa.eu/eli/ontology#passed_by> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.europa.eu/eli/ontology#date_publication> "2024-09-11"^^xsd:date .
<http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan>;
   <http://data.vlaanderen.be/ns/mandaat#isTijdspecialisatieVan> <http://data.lblod.info/id/bestuursorganen/2cbfbb93-446a-45df-ac49-ccfb8835697e> .
<https://boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst#zitting5d06e83d-a498-45cd-af4a-01ebf870762f>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Zitting>;
   dc:title "Besluitenlijst";
   <http://data.vlaanderen.be/ns/besluit#heeftBesluitenlijst> <https://boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst>;
   <http://data.vlaanderen.be/ns/besluit#isGehoudenDoor> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.vlaanderen.be/ns/besluit#geplandeStart> "2024-09-03T12:00:00.0000+02:00"^^xsd:dateTime;
   <http://www.w3.org/ns/prov#startedAtTime> "2024-09-03T11:20:00.0000+02:00"^^xsd:dateTime;
   <http://www.w3.org/ns/prov#endedAtTime> "2024-09-03T11:25:00.0000+02:00"^^xsd:dateTime;
   <http://data.vlaanderen.be/ns/besluit#behandelt> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://data.vlaanderen.be/ns/besluit#behandelt> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#405c695a-faba-4036-b7d3-03d4172dbf5a>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165> .
<http://data.lblod.info/id/bestuursorganen/2cbfbb93-446a-45df-ac49-ccfb8835697e>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan>;
   skos:prefLabel "Vast Bureau Boechout"^^rdfs:Literal;
   org:classification <http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000008>;
   <http://data.vlaanderen.be/ns/besluit#bestuurt> <http://data.lblod.info/id/bestuurseenheden/7563654fe91b0e45cd57a0b2a6e786bfa5f34bb032f360faad7a280bd6510c1a> .
<http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000008>
   rdf:type skos:Concept .
<http://data.lblod.info/id/bestuurseenheden/7563654fe91b0e45cd57a0b2a6e786bfa5f34bb032f360faad7a280bd6510c1a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid>;
   skos:prefLabel "Boechout"^^rdfs:Literal .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Agendapunt>;
   dc:title "1. Goedkeuring notulen vorige vergadering  "^^xsd:string;
   dc:description "1. Goedkeuring notulen vorige vergadering "^^xsd:string;
   <http://data.vlaanderen.be/ns/besluit#geplandOpenbaar> "true"^^xsd:boolean .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling76b10c72-c076-4b4e-af3b-6208135c36d4>
   rdf:type <http://data.vlaanderen.be/ns/besluit#BehandelingVanAgendapunt>;
   <http://data.vlaanderen.be/ns/besluit#openbaar> "true"^^xsd:boolean;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   dc:subject <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://www.w3.org/ns/prov#generated> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit76b10c72-c076-4b4e-af3b-6208135c36d4> .
<http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit76b10c72-c076-4b4e-af3b-6208135c36d4>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Besluit>;
   <http://data.europa.eu/eli/ontology#description> "
                                                Zitting van 03 september 2024 Goedkeuring notulen vorige vergadering BESLUITEnig artikelHet vast bureau keurt de notulen goed.
                                            "^^xsd:string;
   <http://data.europa.eu/eli/ontology#language> <http://publications.europa.eu/resource/authority/language/NLD>;
   <http://data.europa.eu/eli/ontology#title> "Besluit"^^xsd:string;
   <http://data.europa.eu/eli/ontology#passed_by> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.europa.eu/eli/ontology#date_publication> "2024-09-11"^^xsd:date;
   <http://data.europa.eu/eli/ontology#first_date_entry_in_force> "2024-09-11"^^xsd:date;
   <http://www.w3.org/ns/prov#wasGeneratedBy> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://www.w3.org/ns/prov#value> """
                                                Zitting van 03 september 2024 Goedkeuring notulen vorige vergadering BESLUITEnig artikelHet vast bureau keurt de notulen goed.
                                            """ .
<http://publications.europa.eu/resource/authority/language/NLD>
   rdf:type skos:Concept .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#405c695a-faba-4036-b7d3-03d4172dbf5a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Agendapunt>;
   dc:title "2. Deeltijdse werkhervatting - verlenging  "^^xsd:string;
   dc:description "2. Deeltijdse werkhervatting - verlenging "^^xsd:string;
   <http://data.vlaanderen.be/ns/besluit#geplandOpenbaar> "true"^^xsd:boolean;
   <http://data.vlaanderen.be/ns/besluit#aangebrachtNa> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4> .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling405c695a-faba-4036-b7d3-03d4172dbf5a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#BehandelingVanAgendapunt>;
   <http://data.vlaanderen.be/ns/besluit#openbaar> "true"^^xsd:boolean;
   <http://data.vlaanderen.be/ns/besluit#gebeurtNa> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   dc:subject <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#405c695a-faba-4036-b7d3-03d4172dbf5a>;
   <http://www.w3.org/ns/prov#generated> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit405c695a-faba-4036-b7d3-03d4172dbf5a> .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit405c695a-faba-4036-b7d3-03d4172dbf5a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Besluit>;
   <http://data.europa.eu/eli/ontology#description> "
                                                Zitting van 03 september 2024 Deeltijdse werkhervatting - verlenging
                                            "^^xsd:string;
   <http://data.europa.eu/eli/ontology#language> <http://publications.europa.eu/resource/authority/language/NLD>;
   <http://data.europa.eu/eli/ontology#title> "Besluit"^^xsd:string;
   <http://data.europa.eu/eli/ontology#passed_by> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.europa.eu/eli/ontology#date_publication> "2024-09-11"^^xsd:date;
   <http://data.europa.eu/eli/ontology#first_date_entry_in_force> "2024-09-11"^^xsd:date;
   <http://www.w3.org/ns/prov#wasGeneratedBy> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling405c695a-faba-4036-b7d3-03d4172dbf5a>;
   <http://www.w3.org/ns/prov#value> """
                                                Zitting van 03 september 2024 Deeltijdse werkhervatting - verlenging
                                            """ .
```

**RDFa produced by the second link:**

```ttl
@prefix rdfa: <http://www.w3.org/ns/rdfa#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix org: <http://www.w3.org/ns/org#> .

<https://rdfa.info/play/>
   rdfa:usesVocabulary <http://data.vlaanderen.be/ns/besluit#> .
<https://boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst>
   rdf:type foaf:Document;
   rdf:type <https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee>;
   dc:type <https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee>;
   <http://data.europa.eu/eli/ontology#passed_by> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.europa.eu/eli/ontology#date_publication> "2024-09-11"^^xsd:date .
<http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan>;
   <http://data.vlaanderen.be/ns/mandaat#isTijdspecialisatieVan> <http://data.lblod.info/id/bestuursorganen/2cbfbb93-446a-45df-ac49-ccfb8835697e> .
<https://boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst#zitting5d06e83d-a498-45cd-af4a-01ebf870762f>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Zitting>;
   dc:title "Besluitenlijst";
   <http://data.vlaanderen.be/ns/besluit#heeftBesluitenlijst> <https://boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/besluitenlijst>;
   <http://data.vlaanderen.be/ns/besluit#isGehoudenDoor> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.vlaanderen.be/ns/besluit#geplandeStart> "2024-09-03T12:00:00.0000+02:00"^^xsd:dateTime;
   <http://www.w3.org/ns/prov#startedAtTime> "2024-09-03T11:20:00.0000+02:00"^^xsd:dateTime;
   <http://www.w3.org/ns/prov#endedAtTime> "2024-09-03T11:25:00.0000+02:00"^^xsd:dateTime;
   <http://data.vlaanderen.be/ns/besluit#behandelt> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://data.vlaanderen.be/ns/besluit#behandelt> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#405c695a-faba-4036-b7d3-03d4172dbf5a>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezigeBijStart> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165> .
<http://data.lblod.info/id/bestuursorganen/2cbfbb93-446a-45df-ac49-ccfb8835697e>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan>;
   skos:prefLabel "Vast Bureau Boechout"^^rdfs:Literal;
   org:classification <http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000008>;
   <http://data.vlaanderen.be/ns/besluit#bestuurt> <http://data.lblod.info/id/bestuurseenheden/7563654fe91b0e45cd57a0b2a6e786bfa5f34bb032f360faad7a280bd6510c1a> .
<http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000008>
   rdf:type skos:Concept .
<http://data.lblod.info/id/bestuurseenheden/7563654fe91b0e45cd57a0b2a6e786bfa5f34bb032f360faad7a280bd6510c1a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid>;
   skos:prefLabel "Boechout"^^rdfs:Literal .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Agendapunt>;
   dc:title "1. Goedkeuring notulen vorige vergadering  "^^xsd:string;
   dc:description "1. Goedkeuring notulen vorige vergadering "^^xsd:string;
   <http://data.vlaanderen.be/ns/besluit#geplandOpenbaar> "true"^^xsd:boolean .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling76b10c72-c076-4b4e-af3b-6208135c36d4>
   rdf:type <http://data.vlaanderen.be/ns/besluit#BehandelingVanAgendapunt>;
   <http://data.vlaanderen.be/ns/besluit#openbaar> "true"^^xsd:boolean;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   dc:subject <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://www.w3.org/ns/prov#generated> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit76b10c72-c076-4b4e-af3b-6208135c36d4> .
<http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>
   rdf:type <http://data.vlaanderen.be/ns/mandaat#Mandataris> .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit76b10c72-c076-4b4e-af3b-6208135c36d4>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Besluit>;
   <http://data.europa.eu/eli/ontology#description> "
                                                Zitting van 03 september 2024 Goedkeuring notulen vorige vergadering BESLUITEnig artikelHet vast bureau keurt de notulen goed.
                                            "^^xsd:string;
   <http://data.europa.eu/eli/ontology#language> <http://publications.europa.eu/resource/authority/language/NLD>;
   <http://data.europa.eu/eli/ontology#title> "Besluit"^^xsd:string;
   <http://data.europa.eu/eli/ontology#passed_by> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.europa.eu/eli/ontology#date_publication> "2024-09-11"^^xsd:date;
   <http://data.europa.eu/eli/ontology#first_date_entry_in_force> "2024-09-11"^^xsd:date;
   <http://www.w3.org/ns/prov#wasGeneratedBy> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://www.w3.org/ns/prov#value> """
                                                Zitting van 03 september 2024 Goedkeuring notulen vorige vergadering BESLUITEnig artikelHet vast bureau keurt de notulen goed.
                                            """ .
<http://publications.europa.eu/resource/authority/language/NLD>
   rdf:type skos:Concept .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#405c695a-faba-4036-b7d3-03d4172dbf5a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Agendapunt>;
   dc:title "2. Deeltijdse werkhervatting - verlenging  "^^xsd:string;
   dc:description "2. Deeltijdse werkhervatting - verlenging "^^xsd:string;
   <http://data.vlaanderen.be/ns/besluit#geplandOpenbaar> "true"^^xsd:boolean;
   <http://data.vlaanderen.be/ns/besluit#aangebrachtNa> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4> .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling405c695a-faba-4036-b7d3-03d4172dbf5a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#BehandelingVanAgendapunt>;
   <http://data.vlaanderen.be/ns/besluit#openbaar> "true"^^xsd:boolean;
   <http://data.vlaanderen.be/ns/besluit#gebeurtNa> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling76b10c72-c076-4b4e-af3b-6208135c36d4>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAC5557753A0009000136>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAD6B57753A000900014A>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAB1557753A0009000129>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DACE457753A000900013C>;
   <http://data.vlaanderen.be/ns/besluit#heeftAanwezige> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   <http://data.vlaanderen.be/ns/besluit#heeftSecretaris> <http://data.lblod.info/id/functionarissen/642D5CC80562E77202C30603>;
   <http://data.vlaanderen.be/ns/besluit#heeftVoorzitter> <http://data.lblod.info/id/mandatarissen/5C3DAECD57753A0009000165>;
   dc:subject <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#405c695a-faba-4036-b7d3-03d4172dbf5a>;
   <http://www.w3.org/ns/prov#generated> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit405c695a-faba-4036-b7d3-03d4172dbf5a> .
<https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbesluit405c695a-faba-4036-b7d3-03d4172dbf5a>
   rdf:type <http://data.vlaanderen.be/ns/besluit#Besluit>;
   <http://data.europa.eu/eli/ontology#description> "
                                                Zitting van 03 september 2024 Deeltijdse werkhervatting - verlenging
                                            "^^xsd:string;
   <http://data.europa.eu/eli/ontology#language> <http://publications.europa.eu/resource/authority/language/NLD>;
   <http://data.europa.eu/eli/ontology#title> "Besluit"^^xsd:string;
   <http://data.europa.eu/eli/ontology#passed_by> <http://data.lblod.info/id/bestuursorganen/e5e20af9-ad20-420e-82f3-799851a42d80>;
   <http://data.europa.eu/eli/ontology#date_publication> "2024-09-11"^^xsd:date;
   <http://data.europa.eu/eli/ontology#first_date_entry_in_force> "2024-09-11"^^xsd:date;
   <http://www.w3.org/ns/prov#wasGeneratedBy> <https://rdfa.info/play/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#puntbehandeling405c695a-faba-4036-b7d3-03d4172dbf5a>;
   <http://www.w3.org/ns/prov#value> """
                                                Zitting van 03 september 2024 Deeltijdse werkhervatting - verlenging
                                            """ .

```

**Data published for the first link:**

```ttl
@prefix rdf:	<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix ns1:	<http://data.vlaanderen.be/ns/besluit#> .
<https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	rdf:type	ns1:Agendapunt .
@prefix ns2:	<http://mu.semte.ch/vocabularies/core/> .
<https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	ns2:uuid	"3d4a4900-7122-11ef-8607-a992b50ba983" .
@prefix dcterms:	<http://purl.org/dc/terms/> .
<https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	dcterms:title	"1. Goedkeuring notulen vorige vergadering\u00A0 " .
@prefix prov:	<http://www.w3.org/ns/prov#> .
@prefix ns5:	<https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/> .
<https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	prov:wasDerivedFrom	ns5:besluitenlijst .
@prefix xsd:	<http://www.w3.org/2001/XMLSchema#> .
<https://boechout.meetingburger.net/(S(lryzfgt12ph4vwqll5d32bzc))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	ns1:geplandOpenbaar	"true"^^xsd:boolean ;
	dcterms:description	"1. Goedkeuring notulen vorige vergadering\u00A0" .
```

**Data published for the second link:**

```ttl
@prefix rdf:	<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix ns1:	<http://data.vlaanderen.be/ns/besluit#> .
<https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	rdf:type	ns1:Agendapunt .
@prefix ns2:	<http://mu.semte.ch/vocabularies/core/> .
<https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	ns2:uuid	"3bcd3510-7537-11ef-8607-a992b50ba983" .
@prefix dcterms:	<http://purl.org/dc/terms/> .
<https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	dcterms:title	"1. Goedkeuring notulen vorige vergadering\u00A0 " .
@prefix prov:	<http://www.w3.org/ns/prov#> .
@prefix ns5:	<https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/> .
<https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	prov:wasDerivedFrom	ns5:besluitenlijst .
@prefix xsd:	<http://www.w3.org/2001/XMLSchema#> .
<https://boechout.meetingburger.net/(S(iaqu0emijowgjh3q2btvzj4y))/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f/boechout.meetingburger.net/vabu/5d06e83d-a498-45cd-af4a-01ebf870762f#76b10c72-c076-4b4e-af3b-6208135c36d4>	ns1:geplandOpenbaar	"true"^^xsd:boolean ;
	dcterms:description	"1. Goedkeuring notulen vorige vergadering\u00A0" .
```

**Conclusion:**

- because they use relative urls in their html, we fallback to the default base url (above, since we use rdfa.info/play, the base is stable)
- our rdfa extraction library use the target url as base for fallback
- because a segment of the url is dynamic, we end up producing the data twice.
