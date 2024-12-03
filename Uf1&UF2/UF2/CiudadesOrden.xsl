<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" />
    <xsl:template match="/">
        <html>
            <head>
                <title>Ciudades</title>
                <style>
                    table {
                        width: 60%;
                        border-spacing: 0;
                        margin: 30px auto;
                    }
                    th, td {
                        border: 1px solid #000;
                        padding: 8px;
                        text-align: center;
                    }
                    th {
                        background-color: #3E8E41;
                        color: #FFF;
                    }
                </style>
            </head>
            <body>
                <h1 style="text-align: center; color: #333;">Ciudades de Barcelona</h1>
                <table>
                    <tr>
                        <th>Ciudad</th>
                        <th>Provincia</th>
                        <th>Población</th>
                    </tr>
                    <xsl:for-each select="ciudades/ciudad[provincia='Barcelona']">
                        <tr>
                            <td><xsl:value-of select="nombre" /></td>
                            <td><xsl:value-of select="provincia" /></td>
                            <td><xsl:value-of select="habitantes" /></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
