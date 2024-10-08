### Introducció als Espais de Noms en Documents XML

En aquest document explicarem què són els **espais de noms (namespaces)** en el context de documents XML, com es defineixen, per què són necessaris, i veurem diversos exemples per il·lustrar el seu ús correcte. Els espais de noms són una característica essencial en XML, especialment quan treballem amb documents complexos o combinació d'elements de diferents fonts.

---

### Què és un Espai de Noms en XML?

Un **espai de noms** en XML serveix per identificar de manera única els elements i atributs d'un document. És essencial quan estem combinant dades de diferents fonts que podrien tenir elements amb el mateix nom. L'ús d'espais de noms ens permet evitar col·lisions de noms i assegurar-nos que cada element i atribut pertany a la seva "font" correcta.

L'espai de noms es defineix amb una **URI (Uniform Resource Identifier)**, que actua com un identificador únic. No necessàriament és una URL que s'hagi de visitar, sinó un identificador que distingeix els noms dels elements.

#### Exemple bàsic:

Si dos esquemes XML defineixen un element `<persona>`, podria ser confús diferenciar-los en un mateix document. Amb els espais de noms, cada esquema pot tenir la seva pròpia definició de `<persona>` diferenciada mitjançant un URI.

---

### Definició d'un Espai de Noms en XML

Per definir un espai de noms en un document XML, s'utilitza l'atribut `xmlns`. Aquest atribut s'afegeix a l'element arrel (o qualsevol element) i estableix un prefix que s'utilitzarà per qualificar els elements i atributs associats amb aquest espai de noms.

#### Sintaxi:

```xml
<element xmlns:prefix="URI">
    <!-- Contingut -->
</element>
```

- **`xmlns:prefix`**: Defineix el prefix que farà referència a l'espai de noms.
- **`URI`**: És l'identificador únic (normalment una URL, però no és necessari que apunti a un recurs real).

#### Exemple:

```xml
<libre xmlns:cat="http://llibreria.cat">
    <cat:títol>Aprenent XML</cat:títol>
    <cat:autor>Joan</cat:autor>
</libre>
```

- Aquí, `cat:` és un prefix que fa referència a l'espai de noms definit per `http://llibreria.cat`.
- Els elements `títol` i `autor` estan qualificats amb el prefix `cat`, per indicar que pertanyen a l'espai de noms de `http://llibreria.cat`.

---

### Per què Són Necessaris els Espais de Noms?

Els espais de noms són necessaris per evitar **col·lisions de noms** quan diferents XML contenen elements amb el mateix nom. Sense espais de noms, no hi hauria manera de diferenciar elements que tenen el mateix nom però que provenen de diferents contexts.

#### Exemple d'ambigüitat sense espai de noms:

Suposem que tenim dos XML diferents, cadascun amb un element `<persona>` que fa referència a coses diferents:

1. Un XML que parla de treballadors:

   ```xml
   <persona>
       <nom>Maria</nom>
       <càrrec>Enginyera</càrrec>
   </persona>
   ```

2. Un altre XML sobre clients:
   ```xml
   <persona>
       <nom>Joan</nom>
       <compra>Llibres</compra>
   </persona>
   ```

Si volem combinar aquestes dues estructures en un sol document, tindríem una col·lisió de noms, perquè tots dos fan servir `<persona>` amb diferents significats.

#### Resolució amb espais de noms:

Mitjançant els espais de noms, podem clarament distingir quin `persona` fa referència a treballadors i quin fa referència a clients:

```xml
<empresa xmlns:treballador="http://empresa.com/treballadors"
         xmlns:client="http://empresa.com/clients">
    <treballador:persona>
        <treballador:nom>Maria</treballador:nom>
        <treballador:càrrec>Enginyera</treballador:càrrec>
    </treballador:persona>

    <client:persona>
        <client:nom>Joan</client:nom>
        <client:compra>Llibres</client:compra>
    </client:persona>
</empresa>
```

Ara, amb els prefixos `treballador:` i `client:`, queda clar quin `persona` correspon a cada tipus d'informació.

---

### Espai de Noms per Defecte

A més d'utilitzar un prefix, podem definir un **espai de noms per defecte**. Això significa que tots els elements sense prefix dins d'un element tindran el mateix espai de noms.

#### Exemple d'espai de noms per defecte:

```xml
<llibre xmlns="http://llibreria.cat">
    <títol>Aprenent XML</títol>
    <autor>Joan</autor>
</llibre>
```

En aquest cas, l'espai de noms `http://llibreria.cat` s'aplica a tots els elements dins de `<llibre>` (`títol` i `autor`), tot i que no tenen prefix.

---

### Atributs `xsi:schemaLocation` i `xsi:noNamespaceSchemaLocation`

Quan validem un document XML amb un esquema (XSD), utilitzem atributs com `xsi:schemaLocation` i `xsi:noNamespaceSchemaLocation` per indicar on es troba l'esquema.

- **`xsi:schemaLocation`**: S'utilitza per associar un espai de noms amb un esquema. Aquest atribut requereix parelles d'espai de noms i la ubicació de l'esquema.

  Exemple:

  ```xml
  <llibre xmlns="http://llibreria.cat"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://llibreria.cat llibre.xsd">
      <títol>Aprenent XML</títol>
      <autor>Joan</autor>
  </llibre>
  ```

  Aquí, indiquem que l'esquema `llibre.xsd` valida els elements que pertanyen a l'espai de noms `http://llibreria.cat`.

- **`xsi:noNamespaceSchemaLocation`**: S'utilitza quan el document XML **no utilitza espai de noms**. Només s'especifica la ubicació de l'esquema.

  Exemple:

  ```xml
  <llibre xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="llibre.xsd">
      <títol>Aprenent XML</títol>
      <autor>Joan</autor>
  </llibre>
  ```

  En aquest cas, l'esquema `llibre.xsd` valida el document, però no hi ha cap espai de noms associat als elements.

---

### Conclusions

Els espais de noms en XML són una eina essencial per evitar confusions quan treballem amb documents XML complexos o que combinen dades de fonts diferents. Permeten diferenciar clarament els elements i atributs que poden tenir noms similars però que pertanyen a diferents contextos.

- **Prefixos d'espais de noms**: S'utilitzen per qualificar els elements i atributs que pertanyen a diferents espais de noms.
- **Espai de noms per defecte**: S'aplica a tots els elements sense prefix dins d'un element.
- **`xsi:schemaLocation` i `xsi:noNamespaceSchemaLocation`**: Es fan servir per especificar la ubicació de l'esquema que valida el document XML.

Amb aquest coneixement, ja pots treballar amb espais de noms a XML i evitar problemes de col·lisions de noms en documents complexos.

---

### Introducció a `xsi:schemaLocation`, `xsi:noNamespaceSchemaLocation`, `qualified` i `unqualified`

En treballar amb XML i esquemes XSD, és important entendre com es relacionen els documents XML amb els seus esquemes. Els conceptes de **espais de noms (namespaces)** i la **qualificació dels elements** són fonamentals per comprendre com validar correctament un XML. Aquest document té com a objectiu aclarir, amb exemples detallats, les diferències entre `xsi:schemaLocation`, `xsi:noNamespaceSchemaLocation`, i els valors `qualified` i `unqualified` en un XSD.

### 1. `xsi:noNamespaceSchemaLocation` vs `xsi:schemaLocation`

#### A. `xsi:noNamespaceSchemaLocation`

L'atribut `xsi:noNamespaceSchemaLocation` es fa servir quan el document XML **no utilitza cap espai de noms**. Aquest atribut permet referenciar l'esquema XSD que valida el document, però només s'aplica als documents XML on **no hi ha espais de noms definits**.

##### Exemples:

###### Document XML sense espai de noms (`xsi:noNamespaceSchemaLocation`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota xsi:noNamespaceSchemaLocation="nota.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <títol>Recordatori</títol>
    <data>2024-09-27</data>
    <missatge>No t'oblidis de fer la compra.</missatge>
</nota>
```

###### Esquema XSD corresponent:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:element name="nota">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="títol" type="xs:string"/>
                <xs:element name="data" type="xs:date"/>
                <xs:element name="missatge" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

- **Clau**: En aquest exemple, no hi ha cap espai de noms ni en l'XML ni en l'XSD. Per això fem servir `xsi:noNamespaceSchemaLocation`.

#### B. `xsi:schemaLocation`

L'atribut `xsi:schemaLocation` es fa servir quan el document XML **utilitza espais de noms**. Aquest atribut associa l'espai de noms amb la ubicació de l'esquema XSD que validarà els elements d'aquest espai de noms.

##### Exemples:

###### Document XML amb espai de noms (`xsi:schemaLocation`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota xmlns="http://example.com/nota"
      xsi:schemaLocation="http://example.com/nota nota.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <títol>Recordatori</títol>
    <data>2024-09-27</data>
    <missatge>No t'oblidis de fer la compra.</missatge>
</nota>
```

###### Esquema XSD corresponent:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://example.com/nota"
           xmlns="http://example.com/nota"
           elementFormDefault="qualified">

    <xs:element name="nota">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="títol" type="xs:string"/>
                <xs:element name="data" type="xs:date"/>
                <xs:element name="missatge" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

- **Clau**: Aquí el document XML utilitza l'espai de noms `http://example.com/nota`, que es defineix a través de `xmlns`. A més, `xsi:schemaLocation` especifica la ubicació de l'esquema XSD associat a aquest espai de noms.

---

### 2. `qualified` vs `unqualified` en els esquemes XSD

Els esquemes XSD defineixen si els elements d'un document XML estan **qualificats** o no amb l'espai de noms. Això es determina mitjançant l'atribut `elementFormDefault` a l'XSD. Els possibles valors són:

- **`elementFormDefault="qualified"`**: Els elements **locals** de l'XML han de pertànyer a un espai de noms (ja sigui prefixat o per defecte).
- **`elementFormDefault="unqualified"`**: Els elements **locals** de l'XML **no necessiten pertànyer a cap espai de noms**.

#### A. `qualified`

Quan l'XSD defineix `elementFormDefault="qualified"`, vol dir que els elements locals del document XML **han de pertànyer a l'espai de noms definit**. Això es pot fer de dues maneres:

- Usant un **prefix explícit** per als elements.
- Definint un **espai de noms per defecte** amb `xmlns="..."`.

##### Exemples:

###### Document XML amb espai de noms per defecte:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota xmlns="http://example.com/nota"
      xsi:schemaLocation="http://example.com/nota nota.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <títol>Recordatori</títol>
    <data>2024-09-27</data>
    <missatge>No t'oblidis de fer la compra.</missatge>
</nota>
```

- **Clau**: Els elements **estan qualificats** perquè estan dins l'espai de noms definit per `xmlns="http://example.com/nota"`, tot i que no tenen un prefix explícit.

###### Document XML amb prefix explícit:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota xmlns:notans="http://example.com/nota"
      xsi:schemaLocation="http://example.com/nota nota.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <notans:títol>Recordatori</notans:títol>
    <notans:data>2024-09-27</notans:data>
    <notans:missatge>No t'oblidis de fer la compra.</notans:missatge>
</nota>
```

- **Clau**: Els elements **estan qualificats** perquè tenen un prefix (`notans`), que està associat a l'espai de noms `http://example.com/nota`.

#### B. `unqualified`

Quan l'XSD defineix `elementFormDefault="unqualified"`, els elements locals del document XML **no necessiten pertànyer a cap espai de noms**, encara que el document tingui un espai de noms definit.

##### Exemples:

###### Document XML amb espai de noms (però elements no qualificats):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota xmlns="http://example.com/nota"
      xsi:schemaLocation="http://example.com/nota nota.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <títol>Recordatori</títol>
    <data>2024-09-27</data>
    <missatge>No t'oblidis de fer la compra.</missatge>
</nota>
```

###### Esquema XSD corresponent amb `elementFormDefault="unqualified"`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://example.com/nota"
           xmlns="http://example.com/nota"
           elementFormDefault="unqualified">

    <xs:element name="nota">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="títol" type="xs:string"/>
                <xs:element name="data" type="xs:date"/>
                <xs:element name="missatge" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

- **Clau**: Tot i que l'espai de noms `http://example.com/nota` està definit, els elements no estan qualificats per aquest espai de noms perquè l'XSD utilitza `elementFormDefault="unqualified"`. Per tant, no es requereix cap prefix ni associació amb l'espai de noms.

---

### Resum Final:

1. **`xsi:noNamespaceSchemaLocation`**:
   - S'utilitza quan **no hi ha espai de noms** en l'XML.
   - L'XML i l'

XSD no tenen cap espai de noms.

2. **`xsi:schemaLocation`**:

   - S'utilitza quan **hi ha un espai de noms** en l'XML.
   - L'atribut associa l'espai de noms amb la ubicació de l'esquema XSD corresponent.

3. **`elementFormDefault="qualified"`**:

   - Tots els elements locals han d'estar associats amb un espai de noms, ja sigui amb un **prefix explícit** o utilitzant un **espai de noms per defecte**.

4. **`elementFormDefault="unqualified"`**:
   - Els elements locals **no necessiten estar associats a un espai de noms**, fins i tot si l'XML en té un.

Aquests conceptes ajuden a assegurar que els documents XML es validen correctament segons els esquemes XSD, tenint en compte la seva estructura i ús d'espais de noms.

Anem a aclarir el concepte dels **espais de noms** a l'XML i l'XSD, i com interactuen amb els atributs `xmlns:xs` i `xmlns:xsi` dins els exemples que has mostrat.

### 1. **Què signifiquen `xmlns:xs="http://www.w3.org/2001/XMLSchema"` i `xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance`?**

#### - `xmlns:xs="http://www.w3.org/2001/XMLSchema"` a l'XSD:

A l'XSD, aquest atribut **defineix un espai de noms** (`http://www.w3.org/2001/XMLSchema`) per a tots els elements prefixats amb `xs:`. Això significa que tots els elements que comencen amb `xs:` (per exemple, `<xs:element>`, `<xs:complexType>`, etc.) pertanyen a l'espai de noms que defineix l'especificació XML Schema. L'espai de noms s'utilitza per diferenciar elements i tipus que pertanyen a esquemes XML i assegurar que no hi ha conflictes entre noms de diferents especificacions.

- El prefix `xs:` es fa servir dins de l'XSD per referir-se a components del llenguatge d'esquemes XML.
- Sense aquest espai de noms, no podríem especificar què vol dir `<element>`, ja que `element` podria ser qualsevol cosa.

En resum: **`xmlns:xs` a l'XSD defineix l'espai de noms que conté la definició del llenguatge d'esquemes XML (XML Schema Definition Language o XSD)**. El prefix `xs:` s'utilitza per accedir a les eines i elements propis de l'XSD.

#### - `xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"` a l'XML:

Aquest atribut defineix l'espai de noms **per a l'instància XML** que utilitza l'especificació XML Schema Instance (`xsi`), que és el conjunt de regles que ajuden a assignar un esquema XSD a un document XML. Gràcies a `xsi:noNamespaceSchemaLocation`, estàs indicant a l'instància XML on trobar l'esquema (XSD) que cal utilitzar per validar aquest document XML.

L'espai de noms `http://www.w3.org/2001/XMLSchema-instance` defineix atributs especials com ara:

- `xsi:schemaLocation`: Per indicar l'esquema associat amb espais de noms específics.
- `xsi:noNamespaceSchemaLocation`: Per indicar l'esquema associat a documents **sense espai de noms**.

En resum: **`xmlns:xsi` a l'XML permet utilitzar atributs com `xsi:noNamespaceSchemaLocation`** per associar l'instància XML amb el seu esquema per a la validació.

### 2. **Ús de `xsi:noNamespaceSchemaLocation` i els espais de noms en l'XSD**

#### - Ús de `xsi:noNamespaceSchemaLocation`:

Quan a l'XML utilitzes l'atribut `xsi:noNamespaceSchemaLocation="nota.xsd"`, estàs indicant que **l'XML no utilitza cap espai de noms** per als seus elements (`nota`, `títol`, `data`, etc.). Això vol dir que els elements de l'XML no tenen cap prefix d'espai de noms associat.

- Per exemple, a l'XML que has mostrat:
  ```xml
  <nota xsi:noNamespaceSchemaLocation="nota.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <títol>Recordatori</títol>
      <data>2024-09-27</data>
      <missatge>No t'oblidis de fer la compra.</missatge>
  </nota>
  ```
  Els elements `nota`, `títol`, `data` i `missatge` **no estan associats a cap espai de noms**, perquè no tenen cap prefix definit i no hi ha cap `xmlns` per a ells.

#### - Prefix `xs:` i espais de noms a l'XSD:

A l'**XSD**, en canvi, s'utilitza l'espai de noms de l'XML Schema (`xmlns:xs="http://www.w3.org/2001/XMLSchema"`) per a definir l'esquema i els seus elements com `<xs:element>`, `<xs:complexType>`, etc. **Aquest espai de noms no té res a veure amb l'espai de noms dels elements definits en l'XML que validarem**, ja que `xsi:noNamespaceSchemaLocation` s'utilitza per a documents XML **sense espai de noms**.

- Això significa que els elements definits dins de l'XSD, com `nota`, `títol`, `data` i `missatge`, no tenen un espai de noms associat, tot i que l'XSD utilitza el prefix `xs:` per a les seves pròpies definicions internes.

### 3. **Conclusió: com es relacionen l'XML i l'XSD?**

- **A l'XML**: Els elements (`nota`, `títol`, `data`, `missatge`) no tenen un espai de noms associat, ja que estàs utilitzant `xsi:noNamespaceSchemaLocation` per indicar un document **sense espai de noms**.
- **A l'XSD**: Els elements d'esquema (`xs:element`, `xs:complexType`, etc.) utilitzen un espai de noms (`xmlns:xs="http://www.w3.org/2001/XMLSchema"`) perquè estem descrivint les regles del llenguatge XSD. No obstant això, els elements que defineixes dins l'XSD (`nota`, `títol`, `data`, `missatge`) **no estan dins cap espai de noms**, igual que els elements corresponents a l'XML.

### Exemples finals:

- **XSD**:

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

      <xs:element name="nota">
          <xs:complexType>
              <xs:sequence>
                  <xs:element name="títol" type="xs:string"/>
                  <xs:element name="data" type="xs:date"/>
                  <xs:element name="missatge" type="xs:string"/>
              </xs:sequence>
          </xs:complexType>
      </xs:element>

  </xs:schema>
  ```

- **XML (amb `noNamespaceSchemaLocation`)**:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <nota xsi:noNamespaceSchemaLocation="nota.xsd"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <títol>Recordatori</títol>
      <data>2024-09-27</data>
      <missatge>No t'oblidis de fer la compra.</missatge>
  </nota>
  ```

En aquest cas, l'XML **no utilitza cap espai de noms**, i l'XSD tampoc assigna cap espai de noms als elements definits.

---

### targetNamespace i xmlns a un XSD

En un document XSD, les declaracions `targetNamespace` i `xmlns` tenen funcions diferents, tot i que estan relacionades amb els espais de noms. Aquí tens una explicació clara de la diferència entre elles:

### 1. **targetNamespace**:

- **Funció**: Defineix l'espai de noms en què es troben els elements i tipus declarats dins d'un esquema XSD.
- **Aplicació**: Quan s'utilitza `targetNamespace`, s'indica que tots els elements i tipus definits en aquest esquema pertanyen a un espai de noms específic.
- **Utilitat**: És crucial per a identificar de manera única els elements i tipus que defineixes en el teu esquema. Això evita col·lisions amb altres esquemes o elements que tinguin el mateix nom però pertanyin a diferents espais de noms.

#### Exemple:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://example.com/productes">
    <xs:element name="producte">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="nom" type="xs:string"/>
                <xs:element name="preu" type="xs:decimal"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

- En aquest exemple, l'element `<producte>` està definit dins de l'espai de noms `http://example.com/productes`, i qualsevol document XML que vulgui utilitzar aquest element haurà de fer referència a aquest espai de noms.

### 2. **xmlns** (atribut per definir un espai de noms per defecte):

- **Funció**: Assigna un espai de noms per defecte a les etiquetes d'elements dins del document on s'utilitza, en aquest cas dins del propi esquema XSD.
- **Aplicació**: Quan s'utilitza `xmlns="http://example.com/productes"`, s'està dient que els elements no prefixats dins de l'esquema XSD pertanyen a aquest espai de noms per defecte. Això evita haver de prefixar cada element amb un prefix d'espai de noms.
- **Utilitat**: Simplicitat en l'escriptura de l'esquema, ja que tots els elements dins de l'XSD pertanyen a un espai de noms, però no necessiten ser prefixats explícitament.

#### Exemple:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://example.com/productes"
           xmlns="http://example.com/productes"
           elementFormDefault="qualified">
    <xs:element name="producte">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="nom" type="xs:string"/>
                <xs:element name="preu" type="xs:decimal"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

- Aquí, `xmlns="http://example.com/productes"` indica que tots els elements no prefixats dins de l'esquema pertanyen automàticament a l'espai de noms `http://example.com/productes`.
- **targetNamespace** defineix l'espai de noms per a l'esquema, mentre que **xmlns** fa que els elements de l'esquema no necessitin prefixos.

### Resum de les diferències:

- **`targetNamespace`**: Indica l'espai de noms assignat als elements definits en l'XSD, per tant, qualsevol XML que utilitzi aquests elements haurà de referir-se a aquest espai de noms.
- **`xmlns`**: Defineix l'espai de noms per defecte per a l'esquema mateix, evitant la necessitat d'utilitzar prefixos dins de l'esquema quan es treballa amb elements d'aquest espai de noms.

Tots dos atributs poden treballar conjuntament per establir l'espai de noms i fer que l'escriptura de l'esquema sigui més neta i llegible.

---

# Exercicis

### Exercicis per Entendre i Aplicar el Concepte d'Espai de Noms en XML

Aquests exercicis estan dissenyats perquè els estudiants demostrin la seva comprensió del concepte d'espais de noms en documents XML, així com l'ús dels atributs relacionats, com ara `xmlns`, `xsi:schemaLocation` i `xsi:noNamespaceSchemaLocation`. Els exercicis inclouen la creació de documents XML i esquemes XSD, així com la validació d'aquests documents.

---

### Exercici 1: **Validació d'un Document XML amb Espai de Noms**

En aquest exercici, crearàs un document XML que conté dades de dos espais de noms diferents, i definiràs un esquema (XSD) per validar el document XML. A més, aprendràs a utilitzar els atributs `xsi:schemaLocation` i `xmlns`.

#### Objectius:

- Crear un XML amb diversos espais de noms.
- Utilitzar `xsi:schemaLocation` per especificar l'ubicació dels esquemes que validen cada espai de noms.
- Validar el document XML amb els esquemes XSD corresponents.

#### Requisits:

1. **Crea dos esquemes XSD**: Un per a gestionar informació de **clients** i un altre per a informació de **productes**.
2. **Crea un document XML** que utilitzi espais de noms diferents per a cada tipus de dada (clients i productes) i que es pugui validar amb els dos esquemes.

#### Pas 1: Crear l'XSD per a Clients (clients.xsd)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema <!-- todo -->
    <!-- todo -->
</xs:schema>
```

#### Pas 2: Crear l'XSD per a Productes (productes.xsd)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema <!-- todo -->
    <!-- todo -->
</xs:schema>
```

#### Pas 3: Crear l'XML que Combina Espais de Noms

```xml
<?xml version="1.0" encoding="UTF-8"?>
<empresa <!-- todo -->
    <!-- todo -->
</empresa>
```

#### Tasques:

1. Escriu els dos esquemes XSD (`clients.xsd` i `productes.xsd`) i el document XML.
2. Valida el document XML utilitzant aquests esquemes XSD.
3. Explica per què és important utilitzar espais de noms quan es combinen elements d'orígens diferents (clients i productes en aquest cas).

---

### Exercici 2: **XML Sense Espai de Noms i Amb Validació Simple**

En aquest exercici, treballaràs amb un document XML que **no utilitza espais de noms**, però que igualment requereix ser validat per un esquema XSD. Utilitzaràs l'atribut `xsi:noNamespaceSchemaLocation` per indicar l'ubicació de l'esquema.

#### Objectius:

- Crear un document XML que no utilitzi espais de noms.
- Utilitzar `xsi:noNamespaceSchemaLocation` per validar aquest document amb un esquema XSD.

#### Requisits:

1. **Crea un esquema XSD** senzill que descrigui una estructura XML sense espais de noms.
2. **Crea un document XML** que segueixi aquesta estructura i sigui validat amb l'esquema.

#### Pas 1: Crear l'XSD per a una Nota (nota.xsd)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <!-- todo -->
</xs:schema>
```

#### Pas 2: Crear l'XML sense Espai de Noms

```xml
<?xml version="1.0" encoding="UTF-8"?>
<nota <!-- todo -->

    <!-- todo -->

</nota>
```

#### Tasques:

1. Escriu l'esquema `nota.xsd` i el document XML corresponent.
2. Valida el document XML utilitzant l'esquema `nota.xsd`.
3. Explica la diferència entre utilitzar `xsi:schemaLocation` i `xsi:noNamespaceSchemaLocation`.

---

### Conclusions i Objectius Avaluats

Amb aquests exercicis, es pretén que els estudiants:

1. **Diferenciïn clarament l'ús d'espais de noms en XML**: Com i per què utilitzar prefixos per evitar col·lisions de noms.
2. **Aprenguin a utilitzar correctament els atributs `xsi:schemaLocation` i `xsi:noNamespaceSchemaLocation`**: Saber quan és necessari utilitzar un o l'altre, segons la presència d'espais de noms.
3. **Practiquin la validació d'XML amb XSD**: Ser capaços de crear documents XML i validar-los amb esquemes adequats, tant amb espais de noms com sense.

Amb aquests dos exercicis, es cobriran els aspectes més importants del treball amb espais de noms en XML, tant en termes de sintaxi com de pràctica aplicada a la validació de documents.
