<template>
    <div class='container-fluid vue-resume text-center'>
        <div class="d-print-none">
            <router-link to='/' title='Home'><i class="fas fa-home"></i></router-link>
            <a href='javascript:' @click='generateDoc' title='Download PDF'><i class="fas fa-download"></i></a>
        </div>
        <div class='container'>
            <div 
                class="container-fluid columns bg-dark"
                ref='content'>
                <h3>Patrick Emery</h3>
                <a href="mailto:info@pemery.co"><i class="fas fa-envelope mx-1"></i>info@pemery.co</a>
                <a href="tel:+15204772587"><i class="fas fa-phone mx-1"></i>+1 (520) 477-2587</a>
                <a href='https://github.com/ssblur/' title='Github'><i class="fab fa-github mx-1"></i>Github</a>
                <a href='http://pemery.co' title='Website'><i class="fas fa-globe mx-1"></i>http://pemery.co</a>
                <hr class='border-light'>
                <div class="row border-bottom border-light pb-2">
                    <div class="col-3 font-weight-bold">EDUCATION</div>
                    <div class="col-9 text-left">
                        <b>Bachelor's of Science</b><br>
                        <b>From:</b> <a href="https://www.ecu.edu/">East Carolina University</a><br>
                        <b>Graduation Date:</b> May 2020 <br>
                        <b>Major:</b> Computer Science
                    </div>
                </div>
                <div class="row pb-2 mt-2">
                    <div class="col-3 font-weight-bold">EXPERIENCE</div>
                    <div class="col-9 text-left"></div>
                </div>
                <div class="row pb-2">
                    <div class="col-3 font-italic">September 2020 - Present</div>
                    <div class="col-9 text-left">
                        <b>Role:</b> Senior Developer / Project Lead<br>
                        <b>With:</b> DataGroup Technologies (Greenville, NC)<br>
                        <b>Expectations:</b> Develop and maintain the EncounterWorks EHR, discuss feature additions with clients, and ensure software is up to modern security and transmission standards. <br>
                        <b>Technologies:</b> Laravel, PHP, MySQL, JavaScript, jQuery, Vue, Node.js, Webpack, CSS, Bootstrap, DevOps, cPanel, Virtualmin, GitLab, Medical Standards
                    </div>
                </div>
                <div class="row pb-2">
                    <div class="col-3 font-italic">May 2015 - July 2020</div>
                    <div class="col-9 text-left">
                        <b>Role:</b> Contract App Design (Remote)<br>
                        <b>Expectations:</b> Translate client requests into realized web applications, add-ons for other software, and desktop apps. I needed to work and communicate with a variety of clients and resolve technical issues from both clients and users of these applications. <br>
                        <b>Technologies:</b> Various. Notable technologies include Python (Tensorflow and Django), Lua, Rust, HTML, JavaScript, CSS, PHP, and a variety of other less-used languages and technologies.
                    </div>
                </div>
                <div class="row pb-2 border-bottom border-light">
                    <div class="col-3 font-italic">July 2019 - May 2020</div>
                    <div class="col-9 text-left">
                        <b>Role:</b> Tech Support (Greenville, NC)<br>
                        <b>Expectations:</b> This position expected me to assist clients with technical issues, resolving on the spot where relevant, and thoroughly document these interactions. In this position I was also expected to assist clients in designing websites, and maintain basic websites and knowledgebase articles. <br>
                        <b>Technologies:</b> TeamDynamix (ticketing, knowledgebase), Cisco Finesse (chat, phones), Cisco Jabber, HTML, CSS, JavaScript, ColdFusion, FTP
                    </div>
                </div>
                <div class="row pb-2 mt-2">
                    <div class="col-3 font-weight-bold">SKILLS / PROFICIENCIES</div>
                    <div class="col-9 text-left"></div>
                </div>
                <div class="row pb-2">
                    <div class="col-3 font-italic">Technologies</div>
                    <div class="col-9 text-left">
                        <ul>
                            <li>JavaScript (Node, jQuery, Vue, Webpack)</li>
                            <li>PHP (5.5, 7.4, Laravel)</li>
                            <li>JVM (Java, Groovy, Kotlin, Scala)</li>
                            <li>AWS (S3 / Glacier, Lambda, Dynamo)</li>
                            <li>Python (Django, Flask, SKL, TensorFlow)</li>
                            <li>SQL (MySQL, SQLite, Postgres)</li>
                            <li>NoSQL Databasing (Dynamo, Firebase)</li>
                        </ul>
                    </div>
                </div>
                <div class="row pb-2">
                    <div class="col-3 font-italic">Skills</div>
                    <div class="col-9 text-left">
                        <ul>
                            <li>Documentation</li>
                            <li>Effective Communication</li>
                            <li>Independent Time Management</li>
                        </ul>
                    </div>
                </div>
                <div class="row pb-2 mt-2">
                    <div class="col-3 font-weight-bold">COURSEWORK</div>
                    <div class="col-9 text-left">
                        <ul>
                            <li>Machine Learning</li>
                            <li>Software Engineering</li>
                            <li>Database Management</li>
                            <li>Web Applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div ref='spinner' class='bg-dark spinner' hidden>
            <div class="text-center">
                <h1><i class="fas fa-spinner fa-pulse"></i></h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .vue-resume * b {
        color: #00bc8c;
    }
    
    .bg-white {
        background-color: #fff;
    }

    .spinner {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .spinner > div {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>

<script>
    import jsPDF from 'jspdf';
    import Html2Canvas from 'html2canvas';

    export default {
        methods: {
            generateDoc() {
                this.$refs.spinner.hidden = false;  // All this is done with regular JS so we don't have to wait for an update.

                let element = this.$refs.content;   
                let className = element.className;
                element.className = 'bg-white text-dark'; // This feels hackish to get print friendly styling, but it works without me having to pregenerate a PDF.
                Html2Canvas(element).then(canvas => {
                    let img = canvas.toDataURL('image/png');
                    let content = this.$refs.content;
                    let pos = content.getBoundingClientRect();
                    let w = pos.right - pos.left;
                    let h = pos.bottom - pos.top;

                    let doc = new jsPDF({
                        unit: 'px', 
                        format: [w, h],
                        putOnlyUsedFonts: true,
                    });
                    doc.addImage(img, 'PNG', 17.5, 15, w*.95, h*.95);
                    doc.save('resume.pdf');
                    this.print = false;
                    element.className = className;
                    this.$refs.spinner.hidden = true;
                    this.$toast.success('Successfully exported to PDF.');
                });
            }
        }
    }
</script>