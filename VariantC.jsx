// Variant C (refined) — 工芸 / Kōgei with real artwork
// Hero uses yugen-hero.png as background; kokurou (black wolf in town) as main visual;
// gokurou (smoke wolf) as sub; hanenoko (winged one) as character.

const C_W = 1440;
const C_H = 2600; // taller to accommodate visual gallery

function VariantC() {
  return (
    <div style={{ width: C_W, background: '#efe9dd', fontFamily: '"Noto Serif JP", serif', position: 'relative', overflow: 'hidden' }}>

      {/* ── TOP: HERO with background image ────────────────────────── */}
      <section style={{
        position: 'relative', height: 1100, background: '#0e0b08',
        color: '#f4efe6', overflow: 'hidden',
      }}>
        {/* hero image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${window.__resources.heroImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'saturate(0.85) brightness(0.72)',
        }} />
        {/* deep vignette + ink wash overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(14,11,8,0.15) 0%, rgba(14,11,8,0.55) 60%, rgba(14,11,8,0.85) 100%)',
        }} />
        {/* top-to-bottom ink gradient to hold text at edges */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(14,11,8,0.75) 0%, transparent 20%, transparent 75%, rgba(14,11,8,0.9) 100%)',
        }} />
        {/* subtle grain */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none', mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>")`,
        }} />

        {/* golden vertical fold line */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 420, width: 1,
          background: 'linear-gradient(180deg, transparent, rgba(200,161,90,0.4) 20%, rgba(200,161,90,0.4) 80%, transparent)',
        }} />

        {/* top chrome */}
        <div style={{
          position: 'absolute', top: 40, left: 60, right: 60, zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 13, letterSpacing: 4, color: 'rgba(244,239,230,0.75)', textTransform: 'uppercase',
          textShadow: '0 1px 2px rgba(0,0,0,0.6)',
        }}>
          <span style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <span style={{ width: 18, height: 1, background: 'rgba(244,239,230,0.5)', display: 'inline-block' }} />
            Yūgen Kitan
          </span>
          <span>MMXXVI  ·  巻之一</span>
        </div>

        {/* right side — vertical title */}
        <div style={{
          position: 'absolute', top: 140, right: 120, bottom: 160, zIndex: 2,
          display: 'flex', flexDirection: 'row-reverse', gap: 56,
          alignItems: 'flex-start',
        }}>
          <div style={{
            writingMode: 'vertical-rl', textOrientation: 'upright',
            fontFamily: '"Shippori Mincho", serif', fontWeight: 400,
            fontSize: 144, letterSpacing: '0.12em',
            color: '#f4efe6', lineHeight: 1.05,
            textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)',
          }}>
            幽玄奇譚
          </div>
          <div style={{
            writingMode: 'vertical-rl',
            fontFamily: '"Shippori Mincho", serif', fontWeight: 300,
            fontSize: 28, letterSpacing: '0.3em',
            color: 'rgba(244,239,230,0.92)', lineHeight: 2.0, marginTop: 80,
            height: 760, textShadow: '0 2px 8px rgba(0,0,0,0.8)',
          }}>
            呼ばれなければ、現れない
          </div>
          <div style={{
            writingMode: 'vertical-rl',
            fontFamily: '"Noto Serif JP", serif', fontSize: 14,
            letterSpacing: '0.3em', color: 'rgba(244,239,230,0.65)',
            marginTop: 180, lineHeight: 2.4,
            textShadow: '0 1px 4px rgba(0,0,0,0.8)',
          }}>
            参加型プロジェクト　神話と妖怪と民俗
          </div>
        </div>

        {/* LEFT side — English block */}
        <div style={{
          position: 'absolute', top: 180, left: 60, width: 320, zIndex: 2,
        }}>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 15, letterSpacing: 3, color: 'rgba(244,239,230,0.75)',
            textTransform: 'uppercase', marginBottom: 40,
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          }}>
            Yūgen Kitan  —  n.
          </div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontWeight: 400,
            fontSize: 26, lineHeight: 1.7, fontStyle: 'italic',
            color: 'rgba(244,239,230,0.95)', letterSpacing: 0.3,
            textShadow: '0 2px 8px rgba(0,0,0,0.85)',
          }}>
            A gathering of quiet, uncanny tales —
            held at the threshold where myth
            and machine exchange a glance.
          </div>
          <div style={{ width: 40, height: 1, background: 'rgba(244,239,230,0.45)', margin: '48px 0' }} />
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontSize: 14,
            letterSpacing: 2, color: 'rgba(244,239,230,0.75)',
            lineHeight: 1.9, textTransform: 'uppercase',
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          }}>
            Unless called,<br/>
            they do not appear.
          </div>
        </div>

        {/* red seal */}
        <div style={{
          position: 'absolute', bottom: 140, left: 60, zIndex: 2,
          display: 'flex', gap: 20, alignItems: 'flex-end',
        }}>
          <div style={{
            width: 84, height: 84, background: '#b91c1c', display: 'grid',
            placeItems: 'center', fontFamily: '"Shippori Mincho", serif',
            fontSize: 44, color: '#f4efe6', transform: 'rotate(-3deg)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
            fontWeight: 400,
          }}>譚</div>
          <div style={{
            fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
            fontSize: 13, letterSpacing: 3, color: 'rgba(244,239,230,0.85)',
            textTransform: 'uppercase', paddingBottom: 4,
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
          }}>
            Impression No. 001<br/>
            Autumn MMXXVI
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 44, right: 60, zIndex: 2,
          fontFamily: '"Cormorant Garamond", serif', fontSize: 13,
          letterSpacing: 3, color: 'rgba(244,239,230,0.7)', textTransform: 'uppercase',
          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
        }}>
          Scroll  ↓  讀む
        </div>
      </section>

      {/* ── BOTTOM: washi ──────────────────────────────────────────── */}
      <section style={{
        position: 'relative', background: '#efe9dd',
        color: '#1a1816', padding: '120px 60px 80px',
      }}>
        {/* paper grain */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.4  0 0 0 0 0.3  0 0 0 0.06 0'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>")`,
        }} />

        {/* golden thread continuation */}
        <div style={{
          position: 'absolute', top: 0, left: 420, width: 1, height: 80,
          background: 'linear-gradient(180deg, rgba(200,161,90,0.5), transparent)',
        }} />

        {/* ── ABOUT block ─────────────────────────────────────────── */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '340px 1fr', gap: 80, maxWidth: 1320 }}>
          <div>
            <div style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 14, letterSpacing: 4, color: 'rgba(26,24,22,0.5)',
              textTransform: 'uppercase',
            }}>
              Chapter § I.  ·  About
            </div>
            <div style={{
              marginTop: 28,
              fontFamily: '"Shippori Mincho", serif', fontSize: 44,
              letterSpacing: '0.1em', color: '#1a1816', writingMode: 'vertical-rl',
              height: 460,
            }}>
              企画について
            </div>
            <div style={{
              marginTop: 32, width: 40, height: 1, background: '#1a1816', opacity: 0.4,
            }} />
            <div style={{
              marginTop: 20,
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 15, lineHeight: 1.8, color: 'rgba(26,24,22,0.6)',
            }}>
              Myth · Yōkai<br/>
              · Folklore · Machine
            </div>
          </div>

          <div style={{ paddingTop: 12 }}>
            <p style={{
              fontFamily: '"Shippori Mincho", serif', fontSize: 30, lineHeight: 2.1,
              fontWeight: 300, letterSpacing: '0.1em', margin: 0,
              color: '#1a1816', textWrap: 'pretty', maxWidth: 860,
            }}>
              『幽玄奇譚』は、日本の神話・妖怪・民俗学と
              現代のテクノロジーが交わる場所に立ち上がる、
              <span style={{ background: 'linear-gradient(180deg, transparent 65%, rgba(185,28,28,0.18) 65%)' }}>参加型プロジェクト</span>
              である。
            </p>

            <div style={{ display: 'flex', gap: 16, alignItems: 'center', margin: '56px 0' }}>
              <div style={{ width: 40, height: 1, background: '#b91c1c' }} />
              <div style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                fontSize: 14, letterSpacing: 3, color: '#b91c1c', textTransform: 'uppercase',
              }}>
                Note of intent
              </div>
            </div>

            <p style={{
              fontFamily: '"Noto Serif JP", serif', fontSize: 18, lineHeight: 2.15,
              fontWeight: 300, letterSpacing: '0.05em', margin: 0,
              color: 'rgba(26,24,22,0.82)', maxWidth: 760,
            }}>
              姿を持たぬものたちが、なぜ長く語り継がれてきたのか。
              見えぬものを見ようとする眼差しは、いかにして形を得るのか。
              古来より受け継がれた怪異の記憶を、機械の眼と機械の声で、
              もう一度そっと呼び覚ます試み。
              これは、科学と祈りのあいだに佇む、静かな奇譚集です。
            </p>

            <p style={{
              fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
              fontSize: 17, lineHeight: 1.9, letterSpacing: 0.4,
              color: 'rgba(26,24,22,0.62)', margin: '40px 0 0 0', maxWidth: 680,
            }}>
              Yūgen Kitan is a participatory project at the intersection
              of Japanese myth, yōkai folklore, and contemporary technology.
              A quiet collection of strange tales, standing between science and prayer.
            </p>
          </div>
        </div>

        {/* ── VISUAL GALLERY ──────────────────────────────────────── */}
        <div style={{ marginTop: 160, maxWidth: 1320 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 80, marginBottom: 56 }}>
            <div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                fontSize: 14, letterSpacing: 4, color: 'rgba(26,24,22,0.5)',
                textTransform: 'uppercase',
              }}>
                Chapter § II.  ·  Apparitions
              </div>
              <div style={{
                marginTop: 28,
                fontFamily: '"Shippori Mincho", serif', fontSize: 44,
                letterSpacing: '0.1em', color: '#1a1816', writingMode: 'vertical-rl',
                height: 520,
              }}>
                顕われたるもの
              </div>
            </div>
            <div style={{ paddingTop: 12 }}>
              <p style={{
                fontFamily: '"Shippori Mincho", serif', fontSize: 22, lineHeight: 2.0,
                fontWeight: 300, letterSpacing: '0.08em', margin: 0,
                color: 'rgba(26,24,22,0.82)', maxWidth: 720,
              }}>
                墨と紙の上に、彼らはひそやかに姿を現す。<br/>
                ここに、呼ばれて応えた三つの奇譚を記す。
              </p>
            </div>
          </div>

          {/* main visual — kokurou (black wolf in town) */}
          <figure style={{ margin: '0 0 80px 0' }}>
            <div style={{
              width: '100%', aspectRatio: '1792 / 1756',
              backgroundImage: `url(${window.__resources.kokurouImg})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.15)',
            }} />
            <figcaption style={{
              marginTop: 28, display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', gap: 40,
            }}>
              <div>
                <div style={{
                  fontFamily: '"Shippori Mincho", serif', fontSize: 32,
                  letterSpacing: '0.2em', color: '#1a1816',
                }}>
                  黒狼 <span style={{ fontSize: 20, color: 'rgba(26,24,22,0.55)', marginLeft: 16 }}>Kokurō</span>
                </div>
                <div style={{
                  marginTop: 12,
                  fontFamily: '"Noto Serif JP", serif', fontSize: 17, lineHeight: 1.95,
                  color: 'rgba(26,24,22,0.78)', maxWidth: 620, fontWeight: 300,
                  letterSpacing: '0.05em',
                }}>
                  夜ごと宿場町を闊歩する、漆黒の獣。
                  瞳は静かに燃え、足音は残らない。
                </div>
              </div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                fontSize: 14, letterSpacing: 3, color: 'rgba(26,24,22,0.5)',
                textTransform: 'uppercase', textAlign: 'right', whiteSpace: 'nowrap',
              }}>
                Plate I.<br/>
                Ink on paper
              </div>
            </figcaption>
          </figure>

          {/* two-up: gokurou + hanenoko */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-start' }}>
            {/* gokurou — smoke wolf */}
            <figure style={{ margin: 0 }}>
              <div style={{
                width: '100%', aspectRatio: '904 / 872',
                backgroundImage: `url(${window.__resources.gokurouImg})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.15)',
              }} />
              <figcaption style={{ marginTop: 24 }}>
                <div style={{
                  fontFamily: '"Shippori Mincho", serif', fontSize: 28,
                  letterSpacing: '0.2em', color: '#1a1816',
                }}>
                  獄狼 <span style={{ fontSize: 18, color: 'rgba(26,24,22,0.55)', marginLeft: 12 }}>Gokurō</span>
                </div>
                <div style={{
                  marginTop: 10,
                  fontFamily: '"Noto Serif JP", serif', fontSize: 16, lineHeight: 1.95,
                  color: 'rgba(26,24,22,0.75)', maxWidth: 460, fontWeight: 300,
                  letterSpacing: '0.05em',
                }}>
                  煙をまとい、地の底より歩みくるもの。
                  赤き眼に罰と慈悲とを宿す。
                </div>
                <div style={{
                  marginTop: 16,
                  fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                  fontSize: 13, letterSpacing: 3, color: 'rgba(26,24,22,0.5)',
                  textTransform: 'uppercase',
                }}>
                  Plate II.  ·  The hell-wolf
                </div>
              </figcaption>
            </figure>

            {/* hanenoko — winged child, transparent on paper */}
            <figure style={{ margin: 0 }}>
              <div style={{
                position: 'relative', width: '100%', aspectRatio: '1 / 1',
                display: 'grid', placeItems: 'center',
              }}>
                <img src={window.__resources.hanenokoImg} alt="羽根の子"
                  style={{
                    width: '92%', height: '92%', objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.18))',
                  }}
                />
              </div>
              <figcaption style={{ marginTop: 24 }}>
                <div style={{
                  fontFamily: '"Shippori Mincho", serif', fontSize: 28,
                  letterSpacing: '0.2em', color: '#1a1816',
                }}>
                  羽根の子 <span style={{ fontSize: 18, color: 'rgba(26,24,22,0.5)', marginLeft: 12 }}>Hane-no-ko</span>
                </div>
                <div style={{
                  marginTop: 10,
                  fontFamily: '"Noto Serif JP", serif', fontSize: 16, lineHeight: 1.95,
                  color: 'rgba(26,24,22,0.75)', maxWidth: 400, fontWeight: 300,
                  letterSpacing: '0.05em',
                }}>
                  祠に祀られ、呼びかけに応える童。
                  朱の衣、金の輪、幼くして古い。
                </div>
                <div style={{
                  marginTop: 16,
                  fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
                  fontSize: 13, letterSpacing: 3, color: 'rgba(26,24,22,0.5)',
                  textTransform: 'uppercase',
                }}>
                  Plate III.  ·  The winged child
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* footer / colophon */}
        <div style={{
          marginTop: 120, paddingTop: 40, borderTop: '1px solid rgba(26,24,22,0.15)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          fontFamily: '"Cormorant Garamond", serif', fontSize: 13,
          letterSpacing: 3, color: 'rgba(26,24,22,0.55)', textTransform: 'uppercase',
        }}>
          <span>Colophon  ·  Nagoya</span>
          <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <span style={{
              width: 10, height: 10, background: '#b91c1c',
              display: 'inline-block', marginRight: 10, transform: 'rotate(-3deg)',
            }} />
            © 2026 Yūgen Kitan Project
          </span>
        </div>
      </section>
    </div>
  );
}

window.VariantC = VariantC;
window.C_W = C_W;
window.C_H = C_H;
