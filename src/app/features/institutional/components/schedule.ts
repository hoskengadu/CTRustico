import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Training } from '../models/institutional';
@Component({
  selector: 'app-schedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (sessions().length) {
      <div class="schedule-groups" aria-label="Grade de treinos">
        @for (group of groups(); track group.name) {
          <section
            class="schedule-group"
            [class.adult-group]="group.sessions.length > 2"
            [attr.aria-label]="group.name"
          >
            <h3>{{ group.name }}</h3>
            <div class="schedule-grid">
              @for (session of group.sessions; track session.id) {
                <article class="training">
                  <h4>{{ session.day }}</h4>
                  @if (session.time; as time) {
                    <p class="training-time">
                      <time [attr.datetime]="time">{{ time }}</time>
                    </p>
                  } @else {
                    <p class="unconfirmed">Horário a confirmar</p>
                  }
                  <dl>
                    <div>
                      <dt>Modalidade</dt>
                      <dd>{{ session.modality }}</dd>
                    </div>
                    @if (session.teacher) {
                      <div>
                        <dt>Professor</dt>
                        <dd>{{ session.teacher }}</dd>
                      </div>
                    }
                  </dl>
                </article>
              }
            </div>
          </section>
        }
      </div>
      @if (note()) {
        <p class="schedule-note">{{ note() }}</p>
      }
      <a class="text-link" [href]="contactUrl()" target="_blank" rel="noopener noreferrer"
        >Consultar a equipe no Instagram ↗<span class="sr-only"> (abre em nova aba)</span></a
      >
    } @else {
      <div class="empty-state">
        <span class="status">GRADE EM ATUALIZAÇÃO</span>
        <h3>Encontre seu horário.<br />Comece seu caminho.</h3>
        <p>{{ pending() }}</p>
        <a class="text-link" [href]="contactUrl()" target="_blank" rel="noopener noreferrer"
          >Consultar horários no Instagram ↗<span class="sr-only"> (abre em nova aba)</span></a
        >
      </div>
    }
  `,
  styleUrl: './schedule.scss',
})
export class Schedule {
  readonly sessions = input.required<readonly Training[]>();
  readonly note = input('');
  readonly pending = input.required<string>();
  readonly contactUrl = input.required<string>();
  readonly groups = computed(() => {
    const groups = new Map<string, Training[]>();
    for (const session of this.sessions()) {
      const rows = groups.get(session.group) ?? [];
      rows.push(session);
      groups.set(session.group, rows);
    }
    return Array.from(groups, ([name, sessions]) => ({ name, sessions }));
  });
}
