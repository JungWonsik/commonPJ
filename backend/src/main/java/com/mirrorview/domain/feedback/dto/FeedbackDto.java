package com.mirrorview.domain.feedback.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

import com.mirrorview.domain.feedback.domain.Feedback;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackDto {
    private Long id;
    private String roomId;
    private String roomTitle;
    private String content;
    private String senderNickname;
    private LocalDateTime createdTime;

    public static FeedbackDto toDto(Feedback feedback){
        return FeedbackDto.builder()
            .id(feedback.getId())
            .roomTitle(feedback.getRoomTitle())
            .roomId(feedback.getRoomId())
            .content(feedback.getContent())
            .senderNickname(feedback.getSender().getNickname())
            .createdTime(feedback.getCreatedTime())
            .build();
    }
}
