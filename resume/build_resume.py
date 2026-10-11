"""Builds Awab Ali Shah's media buyer resume as a one-page PDF.

All content comes from his existing resume and LinkedIn export.
Run: python resume.py <output.pdf>
"""
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (HRFlowable, ListFlowable, ListItem, Paragraph,
                                SimpleDocTemplate, Spacer, Table, TableStyle)

INK = HexColor('#211E1A')
BODY = HexColor('#3F3B35')
MUTE = HexColor('#7A7368')
SAGE = HexColor('#43634F')
LINE = HexColor('#D9D1C3')

name = ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=20, leading=23, textColor=INK, alignment=TA_CENTER)
title = ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=SAGE, alignment=TA_CENTER)
contact = ParagraphStyle('contact', fontName='Helvetica', fontSize=8.6, leading=11, textColor=MUTE, alignment=TA_CENTER)
section = ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=9.5, leading=12, textColor=SAGE, spaceBefore=7, spaceAfter=2)
body = ParagraphStyle('body', fontName='Helvetica', fontSize=8.9, leading=11.6, textColor=BODY)
role = ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=9.4, leading=12, textColor=INK)
company = ParagraphStyle('company', fontName='Helvetica-Oblique', fontSize=8.6, leading=11, textColor=SAGE)
dates = ParagraphStyle('dates', parent=role, fontName='Helvetica-Bold', fontSize=8.6, textColor=MUTE, alignment=2)
bullet = ParagraphStyle('bullet', parent=body, leading=11.3)
stat_value = ParagraphStyle('stat_value', fontName='Helvetica-Bold', fontSize=12, leading=14, textColor=SAGE, alignment=TA_CENTER)
stat_label = ParagraphStyle('stat_label', fontName='Helvetica', fontSize=7.6, leading=9, textColor=MUTE, alignment=TA_CENTER)

CONTENT_WIDTH = letter[0] - 2 * 0.55 * inch - 12  # the page frame adds 6pt padding per side


def rule():
    return HRFlowable(width='100%', thickness=0.6, color=LINE, spaceBefore=1, spaceAfter=4)


def heading(text):
    return [Paragraph(text.upper(), section), rule()]


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(i, bullet), leftIndent=10, value='•') for i in items],
        bulletType='bullet', start='•', leftIndent=10, bulletFontSize=7, bulletColor=SAGE,
        bulletOffsetY=-1, spaceBefore=1, spaceAfter=3,
    )


def job(role_title, company_line, date_range, items=None):
    header = Table(
        [[Paragraph(role_title, role), Paragraph(date_range, dates)]],
        colWidths=[CONTENT_WIDTH * 0.72, CONTENT_WIDTH * 0.28],
    )
    header.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
        ('VALIGN', (0, 0), (-1, -1), 'BOTTOM'),
    ]))
    parts = [Spacer(1, 3), header, Paragraph(company_line, company)]
    if items:
        parts.append(bullets(items))
    else:
        parts.append(Spacer(1, 3))
    return parts


def stats_row(stats):
    cells = [[Paragraph(v, stat_value) for v, _ in stats], [Paragraph(l, stat_label) for _, l in stats]]
    t = Table(cells, colWidths=[CONTENT_WIDTH / len(stats)] * len(stats))
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), HexColor('#F0F4F0')),
        ('LINEAFTER', (0, 0), (-2, -1), 0.6, HexColor('#FFFFFF')),
        ('TOPPADDING', (0, 0), (-1, 0), 5), ('BOTTOMPADDING', (0, -1), (-1, -1), 5),
        ('TOPPADDING', (0, 1), (-1, 1), 0), ('BOTTOMPADDING', (0, 0), (-1, 0), 0),
    ]))
    return t


def build(path):
    doc = SimpleDocTemplate(
        path, pagesize=letter,
        leftMargin=0.55 * inch, rightMargin=0.55 * inch, topMargin=0.45 * inch, bottomMargin=0.4 * inch,
        title='Awab Ali Shah - Media Buyer Resume', author='Awab Ali Shah',
        subject='Media Buyer | Meta & Google Ads | GoHighLevel Funnels & Automation',
    )
    s = []
    s.append(Paragraph('AWAB ALI SHAH', name))
    s.append(Paragraph('Media Buyer  |  Meta &amp; Google Ads  |  GoHighLevel Funnels &amp; Automation', title))
    s.append(Spacer(1, 2))
    s.append(Paragraph(
        'awabalishah@gmail.com  |  +1 402 872 0319  |  Remote (Available US &amp; UK Hours)  |  '
        'linkedin.com/in/awab-ali  |  awabalishah.com', contact))
    s.append(Spacer(1, 7))
    s.append(stats_row([
        ('5+ years', 'Running paid media'),
        ('10+', 'Concurrent ad accounts'),
        ('$50K+', 'Monthly ad spend'),
        ('30-50%', 'Lower CPL in first 60 days'),
        ('100%', 'Upwork Job Success'),
    ]))

    s += heading('Professional Summary')
    s.append(Paragraph(
        'Hands-on Meta and Google Ads media buyer with 5+ years running lead-generation campaigns for agencies and '
        'local businesses across healthcare, real estate, home services and e-commerce. Comfortable owning a '
        'multi-account portfolio independently and acting on the numbers without waiting to be told. I also build '
        'the GoHighLevel funnels and automations behind the ads, so spend turns into booked appointments rather than '
        'form fills, and I use AI tools (Higgsfield, GPT-based workflows) to move faster across every account.', body))

    s += heading('Professional Experience')
    s += job('Marketing Automation Specialist', 'Loop Wire Media (Remote, US)', 'Jul 2026 - Present')
    s += job('Head of Marketing', 'ClinicUp (Remote, US)', 'Dec 2025 - Jul 2026', [
        'Led lead generation and appointment booking for 20+ clinic clients.',
        'Scaled lead volume by 23% using targeted Meta Ads and GoHighLevel automations.',
    ])
    s += job('Senior Media Buyer', 'Wojo Media, Digital Marketing Agency (Remote)', '2022 - Present', [
        'Own day-to-day delivery across 10+ concurrent Meta, Google and TikTok accounts spanning healthcare, real '
        'estate, home services and e-commerce, with combined monthly ad spend exceeding $50K, operating with full '
        'autonomy from launch through optimisation.',
        'Monitor CPL daily and act immediately when results drift (pausing creative, reallocating budget, adjusting '
        'targeting), and launch new ad sets and video/static creative on a rolling basis to keep testing pipelines full.',
        'Deliver weekly KPI reporting (CPL, ROAS, CPA, lead quality, show rates) to clients and internal '
        'stakeholders via Slack, in plain English with clear next steps.',
        'Built the agency\'s client onboarding system in GoHighLevel (intake, kickoff checklists, tracking setup '
        'SOPs), cutting time-to-launch for new clients from 2 weeks to under 5 days.',
        'Track per-client profitability against fulfilment cost and restructured underpriced retainers, improving '
        'agency margin without client churn.',
    ])
    s += job('Senior Media Buyer (Freelance)', 'Upwork &amp; Direct Clients (Remote)', '2020 - 2022', [
        'Ran full-funnel Meta and Google Ads lead generation for local service businesses (pest control, medspas, '
        'tree services, home improvement), routinely cutting cost per lead 30-50% within the first 60 days through '
        'audience and creative testing.',
        'Maintained a 100% Job Success Score on Upwork while managing multiple client accounts simultaneously '
        'without close supervision.',
        'Wrote ad copy, creative briefs and competitor research (Meta Ad Library) to keep creative testing volume high.',
        'Fixed tracking issues affecting optimisation, including Meta Pixel/CAPI events and Google Ads call '
        'conversions via GTM, and built GoHighLevel landing pages and booking/nurture automations.',
    ])
    s += job('Digital Marketing Executive', 'Techstract, Lahore, Pakistan', '2019 - 2020', [
        'Supported agency delivery across paid campaigns, social media and CRM lead management for SMB clients, '
        'and assisted senior media buyers with reporting and ad account hygiene.',
    ])

    s += heading('Skills &amp; Tools')
    for label, text in [
        ('Ad platforms', 'Meta Ads Manager &amp; Business Suite, Google Ads, TikTok Ads'),
        ('Tracking &amp; analytics', 'Meta Pixel &amp; Conversions API, Google Tag Manager, Google Analytics'),
        ('Funnels &amp; CRM', 'GoHighLevel: funnels, landing pages, calendars, pipelines, workflows and SMS/email automation'),
        ('AI &amp; operations', 'Higgsfield, GPT-based workflows, Canva, Slack, ClickUp, Notion, SOP creation'),
    ]:
        s.append(Paragraph(f'<font name="Helvetica-Bold" color="#211E1A">{label}:</font>  {text}', body))

    s += heading('Education &amp; Languages')
    s.append(Paragraph(
        '<font name="Helvetica-Bold" color="#211E1A">BBA, Business Administration</font>, NCBA&amp;E, Lahore'
        '  |  <font name="Helvetica-Bold" color="#211E1A">Languages:</font> English (professional), Urdu, Pashto (native)', body))

    doc.build(s)


if __name__ == '__main__':
    build(sys.argv[1])
