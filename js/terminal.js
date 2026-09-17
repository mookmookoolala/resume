/* ==========================================
   Jerry Moo Kee Khong - SRE Terminal Emulator
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
});

function initTerminal() {
  const modal = document.getElementById('terminal-modal');
  const openBtns = document.querySelectorAll('.btn-term-trigger');
  const closeDot = document.getElementById('term-close');
  const input = document.getElementById('term-input');
  const body = document.getElementById('term-body');
  const chipBtns = document.querySelectorAll('.chip-btn');

  if (!modal || !input || !body) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', () => openTerminal());
  });

  if (closeDot) {
    closeDot.addEventListener('click', () => closeTerminal());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeTerminal();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === '`')) {
      e.preventDefault();
      if (modal.classList.contains('open')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeTerminal();
    }
  });

  function openTerminal() {
    modal.classList.add('open');
    input.focus();
  }

  function closeTerminal() {
    modal.classList.remove('open');
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmdText = input.value.trim();
      if (cmdText) {
        processCommand(cmdText);
      }
      input.value = '';
    }
  });

  chipBtns.forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmdText = chip.getAttribute('data-cmd');
      if (cmdText) {
        processCommand(cmdText);
        input.focus();
      }
    });
  });

  function appendLine(html, type = 'output') {
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.innerHTML = html;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  function processCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase().trim();
    appendLine(`<span class="terminal-prompt">jerry@sgx-fx:~$</span> ${escapeHTML(rawCmd)}`, 'input-history');

    switch (cmd) {
      case 'help':
        appendLine(`
          <div style="color: #F8FAFC; margin-bottom: 4px;">Available Commands:</div>
          <div style="display: grid; grid-template-columns: 100px 1fr; gap: 4px; color: #94A3B8;">
            <div><strong style="color: #38BDF8;">whoami</strong></div><div>About Jerry & SRE Focus</div>
            <div><strong style="color: #38BDF8;">skills</strong></div><div>Technical skill set & stack</div>
            <div><strong style="color: #38BDF8;">projects</strong></div><div>Projects & Home Lab (AWS, K8s, Bots)</div>
            <div><strong style="color: #38BDF8;">exp</strong></div><div>Career experience timeline</div>
            <div><strong style="color: #38BDF8;">certs</strong></div><div>Verified certifications (RHCE, CCNA, AWS)</div>
            <div><strong style="color: #38BDF8;">aws</strong></div><div>Architecture summary of this site</div>
            <div><strong style="color: #38BDF8;">contact</strong></div><div>Email & Telegram handles</div>
            <div><strong style="color: #38BDF8;">clear</strong></div><div>Clear terminal screen</div>
          </div>
        `);
        break;

      case 'whoami':
        appendLine(`
          <div style="color: #4ADE80; font-weight: bold;">Jerry Moo Kee Khong</div>
          <div style="color: #E2E8F0;">Site Reliability & Platform Engineer @ SGX FX</div>
          <div style="color: #94A3B8; margin-top: 4px;">RHCE & CCNA Network Specialist.</div>
          <div style="color: #94A3B8;">Focus: Linux systems, trade platform reliability, networking, and home lab experimentation.</div>
        `);
        break;

      case 'projects':
        appendLine(`
          <div style="color: #F8FAFC; font-weight: bold;">🛠️ Projects & Labs:</div>
          <div>• <span style="color: #38BDF8;">AWS Static Resume Website</span> — Personal portfolio hosted on AWS (S3, CloudFront, Lambda, DynamoDB)</div>
          <div>• <span style="color: #38BDF8;">proxmox-k8s-lab</span> — Home lab on Proxmox VE running Kubernetes clusters</div>
          <div>• <span style="color: #38BDF8;">letshangout.online</span> — Bill & expense splitting web app for hanging out with friends</div>
          <div>• <span style="color: #38BDF8;">ScissorPaperStone</span> — Rock, paper, scissors game lobby</div>
          <div>• <span style="color: #38BDF8;">BusStopForSingaporeBot</span> — Telegram bot for real-time SG bus arrival timings</div>
          <div>• <span style="color: #38BDF8;">Princecryptobot</span> — Near-realtime crypto price bot</div>
        `);
        break;

      case 'skills':
        appendLine(`
          <div style="color: #F8FAFC;">💻 Key Tech Stack:</div>
          <div style="color: #38BDF8;">• Systems & OS: <span style="color: #F8FAFC;">Red Hat Enterprise Linux, Shell Scripting, Proxmox VE, Kubernetes</span></div>
          <div style="color: #38BDF8;">• Cloud & Infra: <span style="color: #F8FAFC;">AWS (S3, CloudFront, Lambda, DynamoDB, Route53), Docker</span></div>
          <div style="color: #38BDF8;">• Networking: <span style="color: #F8FAFC;">CCNA, Routing, Data Center Operations</span></div>
          <div style="color: #38BDF8;">• Observability: <span style="color: #F8FAFC;">Prometheus, Grafana</span></div>
          <div style="color: #38BDF8;">• Languages: <span style="color: #F8FAFC;">Python, Bash/Shell, JavaScript</span></div>
        `);
        break;

      case 'exp':
        appendLine(`
          <div style="color: #F8FAFC; font-weight: bold;">💼 Work Experience:</div>
          <div><span style="color: #4ADE80;">2025 - Present:</span> SGX FX - Platform Engineer</div>
          <div><span style="color: #38BDF8;">2024 - 2025:</span> Matrixport - DevOps Engineer</div>
          <div><span style="color: #38BDF8;">2022 - 2023:</span> VISA - Systems Engineer</div>
          <div><span style="color: #38BDF8;">2020 - 2022:</span> Sea Group - Data Center Engineer Site Lead</div>
          <div><span style="color: #38BDF8;">2020:</span> Amazon Web Services - Data Center Operation</div>
        `);
        break;

      case 'certs':
        appendLine(`
          <div style="color: #F8FAFC; font-weight: bold;">🎓 Certifications:</div>
          <div>• <span style="color: #EF4444; font-weight: bold;">RHCE</span> - Red Hat Certified Engineer</div>
          <div>• <span style="color: #3B82F6; font-weight: bold;">CCNA</span> - Cisco Certified Network Associate</div>
          <div>• <span style="color: #F59E0B; font-weight: bold;">AWS SAA</span> - AWS Solutions Architect Associate</div>
          <div>• <span style="color: #10B981; font-weight: bold;">CDCP</span> - Certified Data Centre Professional</div>
        `);
        break;

      case 'aws':
        appendLine(`
          <div style="color: #F8FAFC;">☁️ AWS Architecture:</div>
          <div style="color: #94A3B8;">S3 Bucket ➔ CloudFront CDN ➔ Route53 Custom Domain</div>
          <div style="color: #94A3B8;">Visitor Counter API ➔ API Gateway ➔ Lambda ➔ DynamoDB</div>
        `);
        break;

      case 'contact':
        appendLine(`
          <div style="color: #F8FAFC;">📬 Get in touch:</div>
          <div>Email: <a href="mailto:mkk1994@hotmail.com" style="color: #38BDF8;">mkk1994@hotmail.com</a></div>
          <div>Telegram: <a href="https://telegram.me/mookmooklala" target="_blank" style="color: #38BDF8;">@mookmooklala</a></div>
        `);
        break;

      case 'uname':
      case 'uname -a':
        appendLine(`Linux sgx-fx-node01 6.1.0-21-redhat x86_64 GNU/Linux`);
        break;

      case 'sudo':
        appendLine(`<span style="color: #F59E0B;">Access Granted: User jerry already has root privileges.</span>`);
        break;

      case 'clear':
        body.innerHTML = '';
        break;

      default:
        appendLine(`<span style="color: #EF4444;">Command not found: ${escapeHTML(cmd)}. Type '<span style="color: #38BDF8;">help</span>' or '<span style="color: #38BDF8;">projects</span>'.</span>`);
        break;
    }
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
}
