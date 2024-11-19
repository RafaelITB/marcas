<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="ISO-8859-1" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Ciudades seleccionadas</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        margin: 0;
                        padding: 20px;
                    }
                    h1 {
                        text-align: center;
                        color: #333;
                    }
                    table {
                        margin: 20px auto;
                        border-collapse: collapse;
                        width: 80%;
                        background-color: #fff;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        text-align: center;
                    }
                    th {
                        background-color: #4CAF50;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                </style>
            </head>
            <body>
                <h1>Tabla de Ciudades</h1>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Provincia</th>
                        <th>Habitantes</th>
                    </tr>
                    <!-- Vic -->
                    <xsl:if test="//ciudad[nombre='Vic']">
                        <tr>
                            <td><xsl:value-of select="//ciudad[nombre='Vic']/nombre"/></td>
                            <td>Barcelona</td>
                            <td><xsl:value-of select="//ciudad[nombre='Vic']/habitantes"/></td>
                        </tr>
                    </xsl:if>
                    <!-- Barcelona -->
                    <xsl:if test="//ciudad[nombre='Barcelona']">
                        <tr>
                            <td><xsl:value-of select="//ciudad[nombre='Barcelona']/nombre"/></td>
                            <td>Barcelona</td>
                            <td><xsl:value-of select="//ciudad[nombre='Barcelona']/habitantes"/></td>
                        </tr>
                    </xsl:if>
                    <!-- Sabadell -->
                    <tr>
                        <td>Sabadell</td>
                        <td>Barcelona</td>
                        <td>0</td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
