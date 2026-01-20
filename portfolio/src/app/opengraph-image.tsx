import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Joey Pilewski · Technical Solutions Architect";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    // Font loading
    const interMedium = fetch(
        new URL("https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-500-normal.woff")
    ).then((res) => res.arrayBuffer());

    const interBold = fetch(
        new URL("https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff")
    ).then((res) => res.arrayBuffer());

    const [fontMedium, fontBold] = await Promise.all([interMedium, interBold]);

    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom, #1e1b4b, #000000)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter",
                    position: "relative",
                }}
            >
                {/* Background Gradient Effect - imitating the radial gradient */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        background:
                            "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0a0a0a 60%, #000000 100%)",
                        zIndex: 0,
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                        padding: "40px",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 700,
                            color: "#f3f4f6",
                            marginBottom: 20,
                            letterSpacing: "-0.02em",
                            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                        }}
                    >
                        Joey Pilewski
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 700,
                            color: "#818cf8",
                            letterSpacing: "-0.01em",
                            marginBottom: 40,
                        }}
                    >
                        Technical Solutions Architect
                    </div>

                    {/* Decorative Element / Pill */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 24px',
                            background: 'rgba(129, 140, 248, 0.1)',
                            border: '1px solid rgba(129, 140, 248, 0.2)',
                            borderRadius: '9999px',
                        }}
                    >
                        <div
                            style={{
                                width: 10,
                                height: 10,
                                background: '#818cf8',
                                borderRadius: '50%',
                                marginRight: 12,
                                boxShadow: '0 0 10px rgba(129, 140, 248, 0.5)'
                            }}
                        />
                        <div
                            style={{
                                fontSize: 20,
                                color: '#f3f4f6',
                                fontWeight: 700,
                            }}
                        >
                            Available for new opportunities
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Inter",
                    data: fontMedium,
                    style: "normal",
                    weight: 500,
                },
                {
                    name: "Inter",
                    data: fontBold,
                    style: "normal",
                    weight: 700,
                },
            ],
        }
    );
}
