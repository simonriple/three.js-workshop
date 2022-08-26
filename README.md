# three.js-workshop
Take your web project to the next dimension

Er du lei av å jobbe med de samme to kjedelige dimensjonene dag inn og dag ut, år etter år? Ønsker du en unik innsikt i en ny dimensjon, uten å lære deg matrise-multiplikasjon? :face_vomiting:
Aarseth og Riple inviterer til workshop der du kan lære deg alt du trenger om WebGL med Three.js.
I workshoppen vil du tilegne deg den grunnlegende kunnskapen du trenger for å kunne elevere dine web prosjekter til den neste dimensjonen.

Presentation Three.js
# Intro
Velkommen til den neste dimensjonen. Ettersom at PC-er har blitt kraftigere og kraftigere er tiden endelig inne for å kunne levere 3D til folket. Både laptoper og mobiler har den stryken de trenger for å vise enkel 3D. Nå gjenstår det bare at utviklere lærer seg hvordan man lager 3D nettsider. 
Det er det vi ønsker å oppnå med denne workshoppen. 
Vi ønsker at dette skal være en uformell workshop, så det er bare å stille spørsmål underveis dersom ting er uklart eller det er noe dere lurer på. 
Vi er ikke eksperter på dette området, men vi har i de siste månedene testet ut Three.js og ønsker å dele den kunnskapen vi har tilegnet oss idag.  Interessen vår startet med at jeg skulle lage et surfe-spill i 3D. Det virket enkelt nok. En surfer, en strand og en enkel havsimulering av bølger med barrels. Havsimuleringen var under-estimert, og meg og Lars begynte en liten konkurranse om å lage det beste havet. Ingen av oss vant.  
Da sier vi som de sier i starten av småspioner 3D:  «PUT YOUR 3D GLASSES ON»

# WebGL
Eit JavaScript API for rendering av grafikk i nettlesaren. Kjøyrer kode på GPU noko som gjere rendering av fysikk, bileter og effektar effektivt.
Eit WebGL program består av JavaScript og GLSL (Shader kode) Og kan være svært komplisert. Derfor er det fleire rammeverk som abstraherer det lav-nivå WebGL-apiet slik at det kan bli lettare å jobbe med.
WebGL kjøyrer i html-elementet <canvas> i nettlesaren noko som tilgjengeleggjere hardware-akselerert rendering i JavaScript.
WebGL vs OpenGL:
OpenGL er eit API for rendering av grafikk. Kan interagere med fleire API noko som blir kalt for “OpenGL language binding”. WebGL er ein del av OpenGL og er ein av “Language bindingsa”.
# Three.js
-	Abstraksjon av WebGL
Three.js er et javascript bibliotek som abstraherer WebGl. Three.js sin mission statement er å gjøre det så enkelt som mulig å lage 3D innhold på en nettside. 
-	Reduserer boilerplate
Three.js gir oss et smalere api og reduserer boilerplate som gjør det lettere å bruke WebGl funksjonalitet. Men vi har fortsatt stor valgfrihet til å kunne bruke mer avansert funskjonalitet dersom vi ønsker å bruke det. 
Less math
En av de store fordelene med å bruke Three.js er at vi slipper unna mye avansert matte når vi bruker det. Vi slipper å tenke i matriser og dermed slipper vi å bruke transformasjons matriser og matrisemultiplikasjon. 

# Scene
-	Rommet til alt som skal bli rendret av ThreeJS
o	Default plassering er I “origo” (0,0,0)
-	Her skal: lys og objekter være.
# Renderer
-	Kobling mellom scene og canvas
Renderer kobler scenen din til canvas elementet.
-	WebGLRenderer 
Vi bruker WebGLRenderer fordi den gjør at canvas bruker WebGL for å vise scenen. Det finnes også en 2DRenderer som ble brukt tidligere når ikke alle nettlesere støttet WebGL. 
Det er ikke så mye å si om renderen uten at den reduserer utrolig mye boilerplate. 
# Camera
-	Brukerens point of view
Kameraet er brukerens innblikk i scenen. Det gir en 2d representasjon av de 3 dimensjonene i scenen på samme måte som et vanlig kamera gir oss et 2 dimensjonalt bilde av en tredimensjonal verden. De to vanligste kameratypene i 3d er perspective og orthographic 
-	PerspectiveCamera
PerspectiveCamera viser scenen med perspektiv. På samme måte som vi ser verden med våre øyne. Et perspektivkamera definerer en frustum (et pyramide uten top) i scenen av hva vi ser. Det er fire egenskapene for en frustum som vi definerer for å velge brukerens syn i scenen.
o	Near
Minimum avstand fra kameraets posisjon for å vise scenen.  
o	Far
Maksimum avstand fra kameraets posisjon for å vise scenen.
o	Fov
Field of view. Her definerer vi vinkelen til frustumen i grader. En liten field of view vil gjøre at ting i bakgrunnen ser større ut i forhold til ting som er nært. En stor field of view vil gjøre at ting i bakgrunnen ser mindre ut i forhold til ting som er nært.  Et eksempel er fish-eye som har rundt 180 grader fov.  
o	Aspect 
Forholdstall (ratio) mellom bredde og lengde av display
-	OrthographicCamera
OrthographicCamera brukes for å vise scenen uten perspektiv. Det blir typisk brukt enten når man vil tegne noe todimansjonalt i three.js eller når man ønsker å se på modeller fra en side uten at ting som er lenger vekke oppleves mindre. Et Orthographiccamera definerer en rektangel i scenen og har ikke fov
-	OrbitControls
Three.js har OrbitControls lett tilgjengelig. Dette gjør det mulig for brukere å flytte kameraet rundt i scenen ved å bruke musen


# Light
-	ThreeJS.Light
-	Farge, Intensitet.
-	Ambient, Direction, point, spot
-	Ambient: Lyser opp alt likt
-	Direction: Lyset kjem frå ein retning
-	Point: Lyset kjem frå eit punkt (Tenk ei lyspære)
-	Spot: Rett fram: “Spot light”
-	Lys treffer objekter og Objekter vil oppføre seg forskjellig på fleire eigenskaper objektet og lyset har.  (Kanskje nemne Normaler på eit seinare tidspunkt)
# Object
Geometry
-	Formen til eit objekt. Består av vertex (punkt / kanter) Fleire kanter meir detaljer I objektet. ThreeJS har fleire former tilgjengelege, samt er det mogleg å ha “custom” former som ein kan importere. Støtter fleire format so kan lage objekt I standard 3D-program som blender / maya.
o	Nokre av ThreeJS objekta:
	Box, Sphere, Plane, Torus, Cone
	Material
-	“Huden” til objektet. Har fleire eigenskaper som farge, texture og korleis objektet oppfører seg når det blir truffe av lys (Skygge, refleksjon). Her har og ThreeJS fleire ferdige material som ein kan bruke, samt er det mogleg å lage sine eigne gjennom GLSL.
o	Nokre material som ThreeJS har:
	MeshStandardMaterial, MeshPhongMaterial, MeshDepthMaterial, MeshNormalMaterial
Action – Lars
-	Ved hjelp av “RequestAnimationFrame” kan ein flytte, rotere og forandre ting I scena, Dette gjeld alt me har lagt til: Objekt, Lys, Camera etc. Animasjon er rett og slett bevegelse over tid og med denne metoden kan me gradvis oppdatere posisjonen på objekta eller til og med enkelt vertexer I eit objekt.

# Shader
-	GLSL (Open GL shader language)
-	Fragment shader (pixel shader), Vertex shader (sammen er dei eit “program” som blir kjørt for hver kant)
o	Vertex 
	Punkta til eit objekt (kantane)
o	Fragment
	Pixelene (området) I mellom verticene (kantane).
-	Uniform, Varying, attribute
o	Uniform er globale variabler som både Vertex- og Fragment shader har tilgang til.
o	Varying -> kommunikasjon frå vertex til fragment shader.
	Interpolering av vertexshaderen.
o	Attribute
	Berre vertex shader som bruker. Kan ha forskjell mellom kvar vertex.
o	Forhåndsdefinerte uniformar og attributtar:
	Uniform:
•	ModelMatrix
•	Position
•	ModelViewMatrix
•	ProjectionMatrix
•	ViewMatrix (Både for fragment shader og vertex)
•	NormalMatrix
•	CameraPosition (Både for fragment shader og vertex)

-	projectionMatrix * modelViewMatrix
o	Magiske matematikk greier som transformerer 3D objekt (slik me ser ting I virkeligheita) til eit 2D bilde på skjermen som ser ut som eit 3D objekt.

# Map
Displacement map
Displacement map bruker et svart/hvit bilde til å endre geometrien. Three.js flytter vertexene i forhold til hvor lys den respektive pikselen i bildet er. Jo lysere pixelen er, jo høyere blir vertexen plassert. Vi kan sette displacementScale for å bestemme hva som er maksimum høyde.
Alpha map
For å fjerne de skarpe kantene og gjøre overgangen til ingenting smooth  kan vi bruke et alphamap. Alpha map bruker også et svart/hvit bilde som representerer gjennomsiktighet. Svart representerer gjennomsiktig og hvit representerer solid.  
Interaktiv mus
Vi kan legge til litt interaktivitet når brukeren beveger musen. 
Tekst
Vi legger til litt velkomst tekst for brukeren
Window resize 
# Avslutning
Vær nysgjerrig, skru på knappene og se hva som skjer
-	https://threejs.org/
-	https://awwwards.com/
-	https://atmos.leeroy.ca/
-	https://weedensenteret.no/
-	https://www.pola.co.jp/wecaremore/mothersday/
-	https://ikilledacactus.com/
Takk for oss, Dere kan nå ta av dere brillene



