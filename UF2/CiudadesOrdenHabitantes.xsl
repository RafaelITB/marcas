<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Ejemplo XSLT</title>
      </head>
      <body>
        <h1>LISTA DE CIUDADES</h1>
        <xsl:apply-templates select="//ciudad">
          <xsl:sort select="habitantes" data-type="number" order="descending" />
        </xsl:apply-templates>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="ciudad">
    <h3>
      <xsl:value-of select="nombre" />
    </h3>
  </xsl:template>
</xsl:stylesheet>
 