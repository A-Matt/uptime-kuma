-- maintenance_timeslot
CREATE TABLE [maintenance_timeslot] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [maintenance_id] INTEGER NOT NULL CONSTRAINT [FK_maintenance] REFERENCES [maintenance]([id]) ON DELETE CASCADE ON UPDATE CASCADE,
    [start_date] DATETIME NOT NULL,
    [end_date] DATETIME,
    [generated_next] BOOLEAN DEFAULT 0
);

CREATE INDEX [maintenance_id] ON [maintenance_timeslot] ([maintenance_id] DESC);

CREATE INDEX [active_timeslot_index] ON [maintenance_timeslot] (
    [maintenance_id] DESC,
    [start_date] DESC,
    [end_date] DESC
);

CREATE INDEX [generated_next_index] ON [maintenance_timeslot] ([generated_next]);
