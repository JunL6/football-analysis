import fs from 'fs';
import { OutputTarget } from './../Summary';

export class HTMLReport implements OutputTarget {
    print(output: string): void {
        const html = `
            <html>
                <h1>Football Analysis</h1>
                <div>${output}</div>
            </html>
        `;
        fs.writeFileSync("report.html", html);
    }
}